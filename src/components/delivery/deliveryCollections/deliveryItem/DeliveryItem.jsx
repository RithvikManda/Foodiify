import React from 'react'
import "./DeliveryItem.css"

function DeliveryItem({item}) {
  return (
    <div>
      <div className='delivery-item-cover'>
        <img src={item.cover} alt="" className='delivery-item-image' />
      </div>
      <div className='delivery-item-title'>{item.title}</div>
    </div>
  )
}

export default DeliveryItem