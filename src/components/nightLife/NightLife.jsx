import React from 'react'
import "./NightLife.css"
import {VscSettings} from "react-icons/vsc"
import {BiSortAlt2} from "react-icons/bi"
import Filters from '../common/filters'
import ExploreSection from '../common/exploreSection/ExploreSection'
import { nightLife } from '../../data/nightLife'


const nightFilters=[
  {
    id:1,
    icon:<VscSettings className='absolute-center'/>,
    title:"Filters",
  },
  {
    id:2,
    title:"Pro Offers",
    icon:<VscSettings className='absolute-center'/>,
    
  },
  {
    id:3,
    title:"Distance",
    icon:<BiSortAlt2 className='absolute-center'/>,
    
  },
  {
    id:4,
    title:"Rating: 4.0+",
    
  },{
    id:5,
    title:"Pubs & Bard",    
  }
]

const nightList=nightLife
function NightLife() {
  return (
    <div>
      <div className='max-width'>
        <Filters filterList={nightFilters}/>
      </div>
      <ExploreSection list={nightList} collectionName="Hyderabad Night-life"/>
    </div>
  )
}

export default NightLife