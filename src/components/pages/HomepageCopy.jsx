import React from 'react'
import Navbar from '../Navbar'
import {headerData, bmiQuestions} from "../../config/bmiData"
import DesktopLayout from '../DesktopLayout'

const HomepageCopy = () => {
  return (
    <>
      <Navbar />
      <DesktopLayout
        title={headerData.title}
        description={headerData.description}
        questions={bmiQuestions}
      />
    </>
  )
}

export default HomepageCopy
