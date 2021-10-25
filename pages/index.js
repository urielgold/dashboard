import React, {useEffect, useReducer} from 'react';
import Head from 'next/head';
import { signIn } from '../api/api';
import {reducer, initValue} from '../Store/store'
import Footer from '../components/Footer'
import Content from '../components/Content'

import styles from '../styles/Home.module.css';

export const StoreContext = React.createContext({});

export default function Home() {
  const [store, dispatch] = useReducer(reducer, initValue)

  useEffect(async () => {
    await signIn('Uriel', '123')
  }, [dispatch]);

  return (
    <StoreContext.Provider value={{store, dispatch}}>
      <div className={styles.container}>
        <Head>
          <title>AirCall</title>
        </Head>
        <Content/>
        <Footer/>
      </div>
    </StoreContext.Provider>
  );
}
