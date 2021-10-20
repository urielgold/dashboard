import React, {useContext} from 'react'
import {StoreContext} from '../pages';
import classNames from 'classnames';

const menus = [
  {name: 'Overview'},
  {name: 'Resources'},
  {name: 'Tenants'},
  {name: 'Account'},
  {name: 'Alerts'}];

export default function Sidebar() {
  const {store, setStore} = useContext(StoreContext)

  return (
    <div className='sidebar'>
      <div className='header'>
        <span className='pre'>Start</span><span className='post'>Up
</span>        </div>
      {menus.map(page => (
        <div key={page.name} className={classNames('item', {active: store.page === page.name})} 
          onClick={() => setStore(state => ({...state, page: page.name}))}>
          {page.name}
        </div>
      ))}
    </div>
  );
}