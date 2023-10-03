import React from 'react'
import Team from './team'
import Aboutheader from './aboutheader'
import Moreaboutus from './moreaboutus'
import AboutContact from './aboutContact'

const page = () => {
  return (
    <>
    <Aboutheader/>
    <Moreaboutus/>
      <Team/>
      <AboutContact/>
    </>
  )
}

export default page
