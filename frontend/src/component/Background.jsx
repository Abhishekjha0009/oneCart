import React from 'react'
import back11 from "../assets/back11.jpg"
import back22 from "../assets/back22.jpg"
import back33 from "../assets/back33.jpg"
import back44 from "../assets/back44.jpg"

function Background({heroCount}) {

  if(heroCount===0){
    return <img src= {back22} alt="" className='w-[100%] h-[100%]
    float-left overflow-auto object-cover'  />

  }else if(heroCount===1){
           return <img src= {back11} alt="" className='w-[100%] h-[100%]
    float-left overflow-auto object-cover'  />
  }else if(heroCount===2){
           return <img src= {back33} alt="" className='w-[100%] h-[100%]
    float-left overflow-auto object-cover'  />
  }else if(heroCount===3){
           return <img src= {back44} alt="" className='w-[100%] h-[100%]
    float-left overflow-auto object-cover object-center'  />
  }

  
}

export default Background
