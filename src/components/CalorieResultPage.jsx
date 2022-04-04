import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearInput } from '../redux/formDataSlice'
import { HiArrowSmLeft, HiQuestionMarkCircle } from 'react-icons/hi'
import ReactTooltip from 'react-tooltip'

const CalorieResultPage = ({ moveTo }) => {
  const dispatch = useDispatch()
  let calories = useSelector((state) => state.calories)
  let bmr = calories.bmr
  let goals = calories.goals

  const handleRestart = () => {
    moveTo(0)
    dispatch(clearInput())
  }

  const weightLoss = [
    {
      rate: 'Slow (0.25kg / week)',
      value: goals['Mild weight loss']['calory'],
    },
    {
      rate: 'Intermediate (0.5kg / week)',
      value: goals['Weight loss']['calory'],
    },
    {
      rate: 'Fast (1kg / week)',
      value: goals['Extreme weight loss']['calory'],
    },
  ]

  const weightGain = [
    {
      rate: 'Slow (0.25kg / week)',
      value: goals['Mild weight gain']['calory'],
    },
    {
      rate: 'Intermediate (0.5kg / week)',
      value: goals['Weight gain']['calory'],
    },
    {
      rate: 'Fast (1kg / week)',
      value: goals['Extreme weight gain']['calory'],
    },
  ]

  function numberWithCommas(number) {
    number = number.toFixed(0)
    number = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    return number
  }

  return (
    <>
      <ReactTooltip />
      <ReactTooltip />
      <div className='text-center mb-6'>
        <p className='mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl'>
          These are your results.
        </p>
        <p className='max-w-xl mt-5 mx-auto text-xl text-gray-500'>
          Below you can find an estimate of your daily Basal Metabolic Rate (BMR) and your daily
          maintenance calories.
        </p>
      </div>

      <dl className='mt-8 mb-12 flex flex-wrap gap-6 justify-center px-6 max-w-3xl mx-auto'>
        <div className='relative px-4 w-[250px] py-5 bg-gray-100 shadow rounded-lg overflow-hidden sm:p-6'>
          <HiQuestionMarkCircle
            data-multiline={true}
            data-effect='solid'
            data-tip='The BMR or Basal Metabolic Rate is the number of calories your body burns for basic, life-sustaining functions.<br />They can be seen as the calories you burn if you stayed in bed all day.'
            className='absolute top-0 right-0 mt-4 mr-4 text-gray-400 text-2xl'
          />
          <dt className='text-sm font-medium text-gray-500 truncate'>BMR:</dt>
          <dd className='mt-1 text-3xl font-semibold text-gray-900'>
            {numberWithCommas(bmr)} <span className='text-sm text-gray-500'>kcal / day</span>
          </dd>
        </div>
        <div className='relative px-4 w-[250px] py-5 bg-gray-100 shadow rounded-lg overflow-hidden sm:p-6'>
          <HiQuestionMarkCircle
            data-multiline={true}
            data-effect='solid'
            data-tip='Maintenance calories are the number of calories your body needs to support its energy expenditure.<br />Eating at your maintenance, you will neither lose nor gain weight.'
            className='absolute top-0 right-0 mt-4 mr-4 text-gray-400 text-2xl'
          />
          <dt className='text-sm font-medium text-gray-500 truncate'>Maintenance Calories:</dt>
          <dd className='mt-1 text-3xl font-semibold text-gray-900'>
            {numberWithCommas(goals['maintain weight'])}{' '}
            <span className='text-sm text-gray-500'> kcal / day</span>
          </dd>
        </div>
      </dl>

      <div className='relative flex flex-wrap justify-evenly gap-y-10'>
        <div className='flex flex-col px-2'>
          <h4 className='text-black self-center text-2xl mb-4 font-semibold'>Goal: Weight Loss</h4>
          <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
              <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                <table className='min-w-full divide-y divide-gray-200'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                        Weight Loss Rate
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                        Calories / day
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {weightLoss.map((category, categoryIdx) => (
                      <tr
                        key={category.rate}
                        className={categoryIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                          {category.rate}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                          {numberWithCommas(category.value)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col px-2'>
          <h4 className='text-black self-center text-2xl mb-4 font-semibold'>Goal: Weight Gain</h4>
          <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
              <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                <table className='min-w-full divide-y divide-gray-200'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                        Weight Gain Rate
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                        Calories / day
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {weightGain.map((category, categoryIdx) => (
                      <tr
                        key={category.rate}
                        className={categoryIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                          {category.rate}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                          {numberWithCommas(category.value)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default CalorieResultPage
