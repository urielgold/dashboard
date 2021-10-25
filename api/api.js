import {post} from './request'

const BASE = 'https://frontend-test-api.aircall.io'

const saveToken = token => {
    Object.entries(token).forEach(([key, value]) => window.localStorage.setItem(key, value))
}

export const signIn = async (username, password) => {
    const token = await post(BASE + '/auth/login', {username, password})
    saveToken(token)
    return token
}

export const refreshToken = async () => {
    const token = await post(BASE + '/auth/refresh-token-v2', {}, {Authorization : `Bearer ${window.localStorage.getItem('refresh_token')}`})
    saveToken(token)
    return token.access_token;
}

export const getCalls = async (offset, limit) => {
    const token = await refreshToken();
    const data  = await fetch(BASE + `/calls?offset=${offset}&limit=${limit}`, {headers: {Authorization : `Bearer ${token}`}})
    return data.json()
}