import React from 'react'

function List() {
    const items=[
        'miami',
        'boston',
        'paris'

    ];
  return (
    <>
    <h1>cities with these toys!</h1>
    
    {items.map(item=><li>{item}</li>)}
    </>
  )
}

export default List