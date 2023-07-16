import React from 'react'
import "./TopBrands.css"
import NextArrow from "../../common/carousel/nextArrow"
import PrevArrow from '../../common/carousel/prevArrow'
import Slider from 'react-slick'

const brandList=[
    {
        id:1,
        time:"35min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/d76be28e0885f4563a1dbaf3a45f4b74_1635882663.png?output-format=webp"
    },
    {
        id:2,
        time:"25min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/8e611fa769c66049e2af45b00b1d8d52_1635882594.png?output-format=webp"
    },
    {
        id:3,
        time:"28min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/0f13b4a115d1420b049835a5b2037a46_1649660664.png?output-format=webp"
    },
    {
        id:4,
        time:"30min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/cba530e2b1d8439cd4170fef9b3f1d51_1635882104.png?output-format=webp"
    },
    {
        id:5,
        time:"12min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433071.png?output-format=webp"
    },
    {
        id:5,
        time:"21min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983679.png?output-format=webp"
    },
    {
        id:6,
        time:"32min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187971.png?output-format=webp"
    },
    {
        id:7,
        time:"25min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6f7f4964abc7bb71c4bc370ccf36ff91_1633121322.png?output-format=webp"
    },
    
]

const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };


function TopBrands() {
  return (
    <div className='top-brands max-width'>
        <div className='collection-title'>Top Brands for You!</div>
        <Slider {...settings}>
            {brandList.map((brand)=>{
                return <div>
                    <div className='top-brands-cover'>
                        <img src={brand.cover} alt="" className='top-brands-image'/>
                        <span className='top-brands-time'>{brand.time}</span>
                    </div>
                </div>
            })}
        </Slider>
    </div>
  )
}

export default TopBrands