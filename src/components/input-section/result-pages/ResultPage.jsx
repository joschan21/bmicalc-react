import { HiArrowSmLeft } from 'react-icons/hi'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearInput } from '../../../redux/formDataSlice'
import Speedometer from '../Speedometer'
import ErrorPage from '../ErrorPage'

const ResultPage = ({ moveTo }) => {
  const dispatch = useDispatch()
  let { bmi, health } = useSelector((state) => state.bmi)
  const error = useSelector((state) => state.bmi.error)

  const handleRestart = () => {
    moveTo(0)
    dispatch(clearInput())
  }

  if (health === 'Healthy weight' || health === 'Normal') health = 'Healthy'

  let bmiCase
  if (bmi <= 16) bmiCase = 0
  if (bmi > 16) bmiCase = 1
  if (bmi > 18.5) bmiCase = 2
  if (bmi > 25) bmiCase = 3
  if (bmi > 30) bmiCase = 4

  // bmi <= 16 => severe thinness
  // bmi > 16 && <= 18.5 => mild thinness
  // bmi > 18.5 && <= 24.9 => normal
  // bmi > 25 => overweight
  // bmi > 30 => obese class I

  const weights = [
    {
      label: 'Severe Thinness',
      description: `Your BMI of ${bmi} indicates that you are underweight for your height. By maintaining a healthy weight, you lower the risk of
    developing potential health problems.`,
    },
    {
      label: 'Mild Thinness',
      description: `Your BMI of ${bmi} indicates that you are slightly underweight for your height. By maintaining a healthy weight, you lower the risk of
    developing potential health problems.`,
    },
    {
      label: 'Normal',
      description: `Your weight is in the normal range. This indicates that you are at a healthy
    weight for your height. By maintaining a healthy weight, you lower the risk of
    developing potential health problems.`,
    },
    {
      label: 'Overweight',
      description: `Your BMI of ${bmi} indicates that you are slightly overweight for your height. By maintaining a healthy weight, you lower the risk of
    developing potential health problems.`,
    },
    {
      label: 'Obese',
      description: `Your BMI of ${bmi} indicates that you are overweight for your height. By maintaining a healthy weight, you lower the risk of
    developing potential health problems.`,
    },
  ]

  const colorArr = [
    'bg-red-100 text-red-900',
    'bg-yellow-100 text-yellow-900',
    'bg-green-100 text-green-900',
    'bg-yellow-100 text-yellow-900',
    'bg-red-100 text-red-900',
  ]
  const getColors = () => {
    return colorArr[bmiCase]
  }

  const Results = () => {
    if (!error)
      return (
        <>
          <div className='text-center mb-6'>
            <span
              className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${getColors()}`}>
              {health}
            </span>
            <p className='mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl'>
              These are your results.
            </p>
            <p className='max-w-xl mt-5 mx-auto text-xl text-gray-500'>
              {weights[bmiCase].description}
            </p>
          </div>
          <div className='flex justify-center items-center'>
            <div className='w-full scale-[0.75] xs:scale-100 sm:scale-125 flex justify-center items-center h-[200px] md:h-[300px]'>
              <Speedometer />
            </div>
          </div>
          <dl className='mt-8 mb-12 grid grid-cols-1 gap-5 sm:grid-cols-3 px-6 max-w-3xl mx-auto'>
            <div className='px-4 py-5 bg-gray-100 shadow rounded-lg overflow-hidden sm:p-6'>
              <dt className='text-sm font-medium text-gray-500 truncate'>Your BMI (kg/m²):</dt>
              <dd className='mt-1 text-3xl font-semibold text-gray-900'>{bmi}</dd>
            </div>
            <div className='px-4 py-5 bg-gray-100 shadow rounded-lg overflow-hidden sm:p-6'>
              <dt className='text-sm font-medium text-gray-500 truncate'>Your Weight:</dt>
              <dd className='mt-1 text-3xl font-semibold text-gray-900'>{health}</dd>
            </div>
            <div className='px-4 py-5 bg-gray-100 shadow rounded-lg overflow-hidden sm:p-6'>
              <dt className='text-sm font-medium text-gray-500 truncate'>Healthy Range:</dt>
              <dd className='mt-1 text-3xl font-semibold text-gray-900'>18.5 - 25</dd>
            </div>
          </dl>
          <div className='flex flex-col items-center'>
            <button
              className='text-indigo-600 px-6 py-3 mt-6 rounded-lg disabled:bg-gray-300 disabled:text-gray-600 flex items-center gap-x-2 font-semibold'
              onClick={handleRestart}>
              <HiArrowSmLeft /> Back to start
            </button>
          </div>
        </>
      )
    if (error) return <ErrorPage />
  }

  return <Results />
}

export default ResultPage
