import React from 'react'
import "./Delivery.css"
import Filters from '../common/filters'
import {VscSettings} from "react-icons/vsc"
import {BiSortAlt2} from "react-icons/bi"
import DeliveryCollections from './deliveryCollections/DeliveryCollections'
import TopBrands from './topBrands/TopBrands'
import ExploreSection from '../common/exploreSection/ExploreSection'
import { restaurants } from '../../data/restaurants'
const deliverFilters=[
  {
    id:1,
    icon:<VscSettings className='absolute-center'/>,
    title:"Filters"
  },
  {
    id:2,
    title:"Rating 4.0+"
  },
  {
    id:3,
    title:"Safe and Hygienic"
  },
  {
    id:4,
    title:"Pure Veg"
  },
  {
    id:5,
    icon:<BiSortAlt2 className='absolute-center'/>,
    title:"Delivery Time"
  },
  {
    id:6,
    title:"Great Offers"
  },
]

const restaurantList=restaurants

function Delivery() {
  return (
    <div>
      <div className='max-width'>
        <Filters filterList={deliverFilters}/>
        <DeliveryCollections/>
        <TopBrands/>
        <ExploreSection list={restaurantList} collectionName="Delivery Restaurents in Hyderabad"/>
        
      </div>
    </div>
  )
}

export default Delivery