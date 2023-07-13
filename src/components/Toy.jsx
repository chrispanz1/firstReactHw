import React from 'react'

function Toy(props) {
  return (
    <div className='bigBox'>
        
<h1>shape:{props.list.shape}</h1>
<h1>gender:{props.list.gender}</h1>
<h1>type:{props.list.type}</h1>
<h1>price:{props.list.price}</h1>
    </div>
  )
}

export default Toy