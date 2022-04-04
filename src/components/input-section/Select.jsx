import { useDispatch } from 'react-redux'
import { changeOption } from '../../redux/formDataSlice'

const Select = ({ inputName, currentQuestion, currentLabel, currentIndex }) => {
  // Utility Definitions
  const dispatch = useDispatch()

  return (
    <div>
      <label htmlFor='location' className='block text-sm font-medium text-gray-700'>
        Your {inputName}:
      </label>
      <select
        id='location'
        onChange={(event) =>
          dispatch(
            changeOption({
              index: currentIndex,
              type: inputName,
              name: event.target.value,
            })
          )
        }
        value={currentLabel}
        name='location'
        className='mt-1 text-black block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'>
        {currentQuestion.options.map((option) => (
          <option value={option.value} key={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  )
}

export default Select
