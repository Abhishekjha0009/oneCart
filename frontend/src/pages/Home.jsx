import React from 'react'
import { useState } from 'react'
import Background from '../component/Background'
import Hero from '../component/Hero'
import { useEffect } from 'react'
import Product from './Product'
import OurPolicy from '../component/OurPolicy'
import NewLetterBox from '../component/NewLetterBox'
import Footer from '../component/Footer'



function Home() {
  let heroData=[
    {text1:"30% OFF Limited offer",text2:"Style that"},
    {text1:"Discover the Best of Bold Fashion",text2:"Limited Time Only!"},
    {text1:"Explore Our Best Collection",text2:"Shop Now!"},
    {text1:"Choose Your perfect Fashion Fit",text2:"Now on sale!"}
  ]

  let [heroCount,setHeroCount]=useState(0)

    useEffect(()=>{
      let interval= setInterval(()=>{
        setHeroCount(prevCount=> (prevCount===3?0:prevCount+
          1))

      },3000)
      return ()=> clearInterval(interval)

    },[])
  return (

      <div className='overflow-hidden relative top-[70px]'>

    <div className='w-[100vw] h-[calc(100vh-70px)]
    mt-[70px] bg-gradient-to-l
     from-[#141414] to-[#0c2025]'>

      <Background heroCount={heroCount}/>
      <Hero
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      heroData={heroData[heroCount]}
      />
     
    </div>
    <Product/>
    <OurPolicy/>
    <NewLetterBox/>
    <Footer/>
    </div>
  )
}

export default Home

