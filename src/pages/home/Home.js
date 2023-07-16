import React, { useState } from 'react'
import Header from '../../components/common/header/Header'
import TabOptions from '../../components/common/tabOptions/TabOptions'
import Footer from '../../components/common/footer/Footer'
import Delivery from "../../components/delivery/Delivery"
import DiningOut from "../../components/dining/DiningOut"
import NightLife from '../../components/nightLife/NightLife'

function HomePage() {
  const [activeTab,setActiveTab]=useState("Delivery")

  const getCorrectScreen=(tab)=>{
    switch(tab){
      case "Delivery":
        return <Delivery/>
      case "Dining Out":
        return <DiningOut/>
      case "NightLife":
        return <NightLife/>
      default:
        return <Delivery/>
    }
  }

  return (
    <div>
      <Header/>
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>

      {getCorrectScreen(activeTab)}




      <Footer/>
    </div>
  )
  
}

export default HomePage