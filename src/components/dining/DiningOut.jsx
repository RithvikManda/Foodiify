import React from 'react'
import "./DiningOut.css"
import Collection from '../common/collection/Collection'
import {VscSettings} from "react-icons/vsc"
import {BiSortAlt2} from "react-icons/bi"
import { diningOut } from '../../data/diningOut'
import Filters from '../common/filters'
import ExploreSection  from "../common/exploreSection/ExploreSection"

const collection=[
  {
    id:"1",
    title:"trending this week",
    cover:"https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674845310.jpg",
    places:"12 places",
    
  },
  {
    id:"2",
    title:"trending this week",
    cover:"https://b.zmtcdn.com/data/collections/85e2a939e3081d0c056a819edac0f26e_1676541331.jpg",
  },
  {
    id:"3",
    title:"trending this week",
    cover:"https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674845310.jpg",
    places:"12 places",
    
  },
  {
    id:"4",
    title:"trending this week",
    cover:"https://b.zmtcdn.com/data/collections/85e2a939e3081d0c056a819edac0f26e_1676541331.jpg",
  },
  {
    id:"5",
    title:"trending this week",
    cover:"https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674845310.jpg",
    places:"12 places",
    
  },
  {
    id:"6",
    title:"trending this week",
    cover:"https://b.zmtcdn.com/data/collections/85e2a939e3081d0c056a819edac0f26e_1676541331.jpg",
  },
  {
    id:"7",
    title:"trending this week",
    cover:"https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674845310.jpg",
    places:"12 places",
    
  },
  {
    id:"8",
    title:"trending this week",
    cover:"https://b.zmtcdn.com/data/collections/85e2a939e3081d0c056a819edac0f26e_1676541331.jpg",
  },
]
const diningFilters=[
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

const diningList=diningOut;




function DiningOut() {
  return (
    <div>
      <Collection list={collection}/>
      <div className='max-width'>
        <Filters filterList={diningFilters } />
      </div>
      <ExploreSection list={diningList} collectionName="Dine-Out restaurent in Hyderabad"/>
      
    </div>
  )
}

export default DiningOut