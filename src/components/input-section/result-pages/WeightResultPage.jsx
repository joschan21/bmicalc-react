import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearInput } from '../../../redux/formDataSlice'
import { HiArrowSmLeft, HiQuestionMarkCircle } from 'react-icons/hi'
import ReactTooltip from 'react-tooltip'

const WeightResultPage = ({ moveTo }) => {
  const dispatch = useDispatch()
  const idealWeight = useSelector((state) => state.weight.idealWeight)

  const handleRestart = () => {
    moveTo(0)
    dispatch(clearInput())
  }

  return (
    <>
      <ReactTooltip />
      <ReactTooltip />
      <div className='text-center mb-6'>
        <p className='mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl'>
          Your ideal weight.
        </p>
        <p className='max-w-xl mt-5 mx-auto text-xl text-gray-500'>
            In contrast to other services, we use four different methods of calculating your ideal weight - so you can get the most accurate result.
        </p>
      </div>

      <dl className='mt-8 mb-12 flex flex-wrap gap-6 justify-center px-6 max-w-3xl mx-auto'>
        <div className='relative px-4 w-[200px] py-5 bg-gray-100 shadow rounded-lg overflow-hidden sm:p-6'>
          <HiQuestionMarkCircle
            data-multiline={true}
            data-effect='solid'
            data-tip='This is the average of four different calculation methods (Hamwi, Devine, Miller and Robinson).'
            className='absolute top-0 right-0 mt-4 mr-4 text-gray-400 text-2xl'
          />
          <dt className='text-sm font-medium text-gray-500 truncate'>Your Ideal Weight:</dt>
          <dd className='mt-1 text-3xl font-semibold text-gray-900'>
            {idealWeight} <span className='text-sm text-gray-500'>kg</span>
          </dd>
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
}

export default WeightResultPage
