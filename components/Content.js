import React, {useEffect, useContext} from 'react'
import { getCalls } from '../api/api';
import { StoreContext } from '../pages';
import { actions } from '../Store/store';
import Card from './Card'

export default function Content () {
    const {dispatch, store: {nodes, current}} = useContext(StoreContext);

    useEffect(async () => {
        const calls = await getCalls(0, 30);
        dispatch({type: actions.ADD_CALLS, data: calls})
        dispatch({type: actions.SET_CURRENT, data: {limit: 0, offset: 15}})
      }, []);

    return (
        <div className='content'>
            {nodes.length > 0 
            ? nodes.slice(current.limit, current.offset).map(node => <Card key={node.id} data={node}/>)
            : null
            }
        </div>
    );
};