import React, {useContext} from 'react'
import { StoreContext } from '../pages';
import { actions } from '../Store/store';
import { getCalls } from '../api/api';

export default function Footer() {

    const {store, dispatch} = useContext(StoreContext)
    const handleOnNext = () => {
        if (store.nodes.length < store.totalCount && store.current.limit + 20 > store.nodes.length) {
            getCalls(store.nodes.length, 20).then(calls => {
                dispatch({type: actions.ADD_CALLS, data: calls})
                dispatch({type: actions.SET_CURRENT, data: {limit: store.current.offset, offset: store.current.offset + 12}})
            })
        } else {
            dispatch({type: actions.SET_CURRENT, data: {limit: store.current.offset, offset: store.current.offset + 12}})
        }
    }

    const handleOnPrev = () => {
        dispatch({type: actions.SET_CURRENT, data: {limit: store.current.limit - 12, offset: store.current.limit - 1}})
    }
    return (
        <div className='footer'>
            <div className='button' onClick={handleOnPrev}>{`< Previous`}</div>
            <div className='button' onClick={handleOnNext}>{`Next >`}</div>
        </div>
    );
};