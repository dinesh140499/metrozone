import React, { useEffect } from 'react'
import ReverseRoute from './ReverseRoute'
import TimeTable from './TimeTable'
import FaqMetro from './FaqMetro'
import DelhiMetroLine from '../../common/DelhiMetroLine'

const RoutePage = () => {
  useEffect(()=>{
    if(window.pageYOffset>0){
      window.scrollTo({
        top:0
      })
    }
  },[])
  return (
    <>
      <ReverseRoute />
      <TimeTable />
      <DelhiMetroLine />
      <FaqMetro />
    </>
  )
}

export default RoutePage