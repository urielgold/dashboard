import React, {useState} from 'react';
import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import Overview from '../components/Overview';
import styles from '../styles/Home.module.css';

export const StoreContext = React.createContext({});

export default function Home() {
  const [store, setStore] = useState({page: 'Overview'})

  return (
    <StoreContext.Provider value={{store, setStore}}>
      <div className={styles.container}>
        <Head>
          <title>StartUp</title>
        </Head>
        <Sidebar/>
        <Overview/>
      </div>
    </StoreContext.Provider>
  );
}
