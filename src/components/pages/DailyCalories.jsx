import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DesktopLayout from '../DesktopLayout'
import MobileLayout from '../MobileLayout'
import Navbar from '../Navbar'
import TopBar from '../TopBar'
import { changeNav } from '../../redux/NavbarSlice'
import { headerData, dailyCalorieQuestions } from '../../config/dailyCaloriesData'

const DailyCalories = () => {
  const dispatch = useDispatch()

  // on page render, change the active navigation index
  useEffect(() => {
    dispatch(changeNav({ index: 1 }))
  }, [])

  // check if mobile iframe should be displayed
  const mobileView = useSelector((state) => state.responsive.mobileView)

  return (
    <>
      <div className='sticky top-0 z-40'>
        <TopBar />
      </div>
      {!mobileView && <Navbar />}
      {mobileView ? (
        <MobileLayout />
      ) : (
        <DesktopLayout
          title={headerData.title}
          description={headerData.description}
          questions={dailyCalorieQuestions}
        />
      )}
    </>
  )
}

export default DailyCalories
