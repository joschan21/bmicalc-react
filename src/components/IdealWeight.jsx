import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DesktopLayout from "./DesktopLayout"
import MobileLayout from './MobileLayout'
import Navbar from './Navbar'
import TopBar from './TopBar'
import { changeNav } from '../redux/NavbarSlice'
import {headerData, idealWeightQuestions} from "../config/idealWeightData"

const DailyCalories = () => {
  const dispatch = useDispatch()

  // on page render, change the active navigation index
  useEffect(() => {
    dispatch(changeNav({index: 2}))
  }, [])
  
  // check if mobile iframe should be displayed
  const mobileView = useSelector((state) => state.responsive.mobileView)

  return (
    <>
      <TopBar />
      {!mobileView && <Navbar />}
      {mobileView ? <MobileLayout /> : <DesktopLayout title={headerData.title} description={headerData.description} questions={idealWeightQuestions}/>}
    </>
  )
}

export default DailyCalories
