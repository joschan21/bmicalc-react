import React from 'react'
import Navbar from '../Navbar'
import TopBar from '../TopBar'
import MobileLayout from '../MobileLayout'
import DesktopLayout from '../DesktopLayout'
import { useSelector } from 'react-redux'
import { headerData, bmiQuestions } from '../../config/bmiData'
import { AnimatePresence } from 'framer-motion'

const Homepage = () => {
  const mobileView = useSelector((state) => state.responsive.mobileView)

  return (
    <>
      <div className='sticky top-0 z-40'>
        <TopBar />
      </div>
      {!mobileView && <Navbar />}
      <AnimatePresence>
        {mobileView ? (
          <MobileLayout />
        ) : (
          <DesktopLayout
            title={headerData.title}
            description={headerData.description}
            questions={bmiQuestions}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Homepage
