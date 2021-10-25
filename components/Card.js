import React from 'react'

export default function({data: {notes, ...rest}}) {
    return (
        <div className='card'>
            {Object.entries(rest).map(([key, value]) => (
                <>
                    <div key={key} className='field'>{key}:</div>
                    <div key={key + ' value'} className='field-data'>{value}</div>
                </>
            ))}
        </div>
    )
}