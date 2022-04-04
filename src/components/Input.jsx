import { useDispatch } from 'react-redux'
import { changeInput, changeOption } from '../redux/formDataSlice'

const Input = ({
  inputName,
  currentQuestion,
  emoji,
  currentIndex,
  currentLabel,
  indexOfOption,
  form
}) => {
  // Utility Definitions
  const { options } = currentQuestion
  const dispatch = useDispatch()

  // Check if current question has options to choose from
  let thereAreOptions = options.findIndex((object) => {
    return object.hasOwnProperty('label')
  })
  thereAreOptions = thereAreOptions === -1 ? false : true

  // Getting the placeholder for the current question
  const placeholder = currentQuestion.options[indexOfOption].placeholder

  // Getting the value for the current question
  const value = form[currentIndex][inputName]

  // Send user inputs to reducer
  const handleInput = (e) => {
    const { value } = e.target
    dispatch(changeInput({ currentIndex, inputName, value }))
  }

  return (
    <div className='w-full'>
      <label className='block text-sm font-medium text-gray-700'>Your {inputName}:</label>
      <div className='mt-1 relative rounded-md shadow-sm'>
        <div className='absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none'>
          <span className='text-gray-500 sm:text-sm'>{emoji}</span>
        </div>
        <input
          autoFocus
          type='text'
          value={value}
          onChange={handleInput}
          className='focus:ring-indigo-500 caret-black text-black focus:border-indigo-500 bg-white block w-full pl-8 pr-12 sm:text-sm border-gray-300 rounded-md'
          placeholder={placeholder}
        />

        {/* Only render out possible options to choose from if they exist */}
        {thereAreOptions && (
          <div className='absolute inset-y-0 right-0 flex items-center'>
            <select
              key='select'
              onChange={(event) =>
                dispatch(changeOption({ index: currentIndex, type: "option", name: event.target.value }))
              }
              value={currentLabel}
              className='focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md'>
              {options.map((option, i) => (
                <option key={i}>{option.label}</option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  )
}

export default Input
