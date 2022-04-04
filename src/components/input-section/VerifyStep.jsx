import getStepAnimationProps from '../../utils/animationDirection'
import { motion } from 'framer-motion'
import Input from './Input'
import isValidInput from '../../utils/isValidInput'
import Select from './Select'

// API Call Imports
import bmiRequest from '../../api/bmiRequest'
import dailyCalorieRequest from '../../api/dailyCalorieRequest'
import idealWeightRequest from '../../api/idealWeightRequest'

const VerifyStep = ({ motionDirection, form, setCurrentQuestion, questions, activeNav }) => {
  const possibleActions = [bmiRequest, dailyCalorieRequest, idealWeightRequest]

  // User clicked "Calculate my BMI"
  const handleClick = () => {
    possibleActions[activeNav](questionData)
    setCurrentQuestion((prevQuestion) => ({
      ...prevQuestion,
      index: prevQuestion.index + 1,
    }))
  }

  // Check if any input is invalid
  const allInputsValid = () => {
    let isDisabled = false

    for (let index = 0; index < questions.length; index++) {
      if (questions[index].questionType === 'input') {
        const currentLabel = form[index].option
        const currentQuestion = questions[index]
        const currentInputName = currentQuestion.inputName

        const activeQuestion = form[index][currentInputName]
        const { options } = currentQuestion

        // Getting the index of the current seleted option
        let indexOfOption = options.findIndex((object) => {
          return object.label === currentLabel
        })
        // if no "label" property was found in question options
        if (indexOfOption === -1) indexOfOption = 0

        const input = activeQuestion
        const regex = currentQuestion.regex[indexOfOption]
        if (!isValidInput(input, regex)) isDisabled = true
      }
    }

    if (!isDisabled) return true
    else return false
  }

  // Create an array of all input names
  let questionData = []

  return (
    <motion.div
      className='flex flex-col items-center'
      {...getStepAnimationProps({ motionDirection })}>
      <h2 className='text-black text-3xl font-bold text-center'>Ready to go?</h2>
      <div className='my-6 flex flex-col gap-y-4'>
        {questions.map((question, index) => {
          let currentLabel
          let indexOfOption
          if (question.questionType === 'input') {
            const { options } = question

            // Getting the current selected option of the current question
            currentLabel = form[index].option

            // Getting the index of the current seleted option
            indexOfOption = options.findIndex((object) => {
              return object.label === currentLabel
            })
            // if no "label" property was found in question options
            // use just placeholder
            if (indexOfOption === -1) indexOfOption = 0

            // BMI request needs all inputNames, the chosen option for each of them
            // send them over in an array called questionData
            questionData.push({
              inputName: question.inputName,
              value: form[index][question.inputName],
              option: indexOfOption,
            })
          } else if (question.questionType === 'select') {
            const indexOfInput = form.findIndex((formInput) =>
              formInput.hasOwnProperty(question.inputName)
            )
            questionData.push({
              inputName: question.inputName,
              value: form[indexOfInput][question.inputName],
            })
          }

          return (
            <div key={index}>
              {question.questionType === 'input' && (
                <Input
                  currentQuestion={question}
                  indexOfOption={indexOfOption}
                  currentLabel={currentLabel}
                  currentIndex={index}
                  inputName={question.inputName}
                  form={form}
                  emoji={question.emoji}
                />
              )}
              {/* Render A Select For Every Question Of Type "Select" */}
              {question.questionType === 'select' && (
                <Select
                  inputName={question.inputName}
                  currentQuestion={question}
                  currentIndex={index}
                  currentLabel={form[index][question.inputName]}
                />
              )}
            </div>
          )
        })}
      </div>
      <button
        onClick={handleClick}
        className='bg-primary mt-4 px-6 py-3 rounded-lg disabled:bg-gray-300 disabled:text-gray-600'
        disabled={!allInputsValid()}>
        Get my results!
      </button>
    </motion.div>
  )
}

export default VerifyStep
