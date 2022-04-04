import { motion } from 'framer-motion'
import ControlButton from './ControlButton'
import getStepAnimationProps from '../utils/animationDirection'
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter'
import Input from './Input'
import isValidInput from '../utils/isValidInput'
import ProgressCircles from './ProgressCircles'
import Select from './Select'

const AllQuestions = ({
  currentIndex,
  moveTo,
  motionDirection,
  inputName,
  currentQuestion,
  emoji,
  form,
  questions,
}) => {
  // Utility Definitions
  const { options } = currentQuestion

  // Getting the input value for the current question
  const currentInput = form[currentIndex][inputName]

  // Getting the current selected option of the current question
  const currentLabel = form[currentIndex].option

  // Getting the index of the current seleted option
  let indexOfOption = options.findIndex((object) => {
    return object.label === currentLabel
  })
  // if no "label" property was found in question options
  // use just placeholder
  if (indexOfOption === -1) indexOfOption = 0

  // Checking if current input is valid
  const currentInputValid = () => {
    if (currentQuestion.questionType === 'input') {
      return isValidInput(currentInput, currentQuestion.regex[indexOfOption])
    } else if (currentQuestion.questionType === 'select') {
      // Do not check the input in a select, they always have valid inputs
      return true
    }
  }



  return (
    <>
      <div key={0} className='sm:grid'>
        <motion.div
          className='col-start-1 col-span-1 row-start-1 row-span-1 w-full md:min-h-[200px]'
          key='key'
          {...getStepAnimationProps({ motionDirection })}>
          <h2 className='text-black text-center font-bold text-3xl md:text-4xl'>
            {questions[currentIndex].heading}
          </h2>
          <div className='flex justify-center max-w-[300px] mx-auto mt-6 mb-4'>
            {/* Render An Input For Every Question Of Type "Input" */}
            {currentQuestion.questionType === 'input' && (
              <Input
                key='inputfield'
                inputName={inputName}
                currentQuestion={currentQuestion}
                emoji={emoji}
                currentIndex={currentIndex}
                currentLabel={currentLabel}
                indexOfOption={indexOfOption}
                form={form}
              />
            )}
            {/* Render A Select For Every Question Of Type "Select" */}
            {currentQuestion.questionType === 'select' && (
              <Select
                key='select'
                inputName={inputName}
                currentQuestion={currentQuestion}
                currentIndex={currentIndex}
                currentLabel={form[currentIndex][inputName]}
              />
            )}
          </div>
        </motion.div>
      </div>
      <div className='flex flex-col gap-x-6 items-center'>
        <div className='flex flex-wrap md:flex-nowrap mt-10 xs:mt-3 md:gap-x-14 justify-evenly items-center gap-y-4 sm:gap-y-8 md:gap-y-10'>
          <div className='md:order-1'>
            <ControlButton
              handleClick={() => moveTo(currentIndex - 1)}
              isDisabled={currentIndex - 1 < 0}
              label='Back'
            />
          </div>
          <div className='md:order-3'>
            <ControlButton
              handleClick={() => moveTo(currentIndex + 1)}
              isDisabled={!currentInputValid()}
              label='Next'
            />
          </div>
          <div className='w-full md:order-2 flex justify-center items-center'>
            <ProgressCircles
              motionDirection={motionDirection}
              currentIndex={currentIndex}
              questions={questions}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default AllQuestions
