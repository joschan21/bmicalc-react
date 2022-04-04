import { AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { questions } from '../config/questions'
import { useSelector } from 'react-redux'
import Spinner from './Spinner'
import AllQuestions from './AllQuestions'
import VerifyStep from './VerifyStep'
import ResultPage from './ResultPage'
import CalorieResultPage from './CalorieResultPage'
import WeightResultPage from './WeightResultPage'

const Modal = ({ questions }) => {
  // Utility Definitions
  const form = useSelector((state) => state.form)
  const nav = useSelector((state) => state.nav)
  const activeNav = nav.findIndex((navItem) => navItem.current === true)

  // Parameters of the current question being asked
  const [currentQuestion, setCurrentQuestion] = useState({
    index: 0,
    inputName: questions[0].inputName,
  })

  // Getting the emoji for the current question

  // Shows current direction the questions are moving
  const motionDirection = useRef(1)

  const [spinner, setSpinner] = useState({
    show: false,
    loading: false,
  })

  // Creating a Spinner effect before the ResultPage loads
  useEffect(() => {
    if (spinner.loading) {
      setTimeout(() => {
        setSpinner((prevSpinner) => ({ ...prevSpinner, loading: false }))
      }, 2000)
    }
  }, [spinner.loading])

  useEffect(() => {
    if (currentQuestion.index === questions.length + 1) {
      setSpinner((prevSpinner) => ({ ...prevSpinner, loading: true }))
      setTimeout(() => {
        setSpinner((prevSpinner) => ({ ...prevSpinner, loading: false }))
        setSpinner((prevSpinner) => ({ ...prevSpinner, show: true }))
      }, 2000)
    }
    setSpinner((prevSpinner) => ({ ...prevSpinner, show: false }))
  }, [currentQuestion.index])

  if (spinner.loading) return <Spinner />

  // Move to next or previous question
  function moveTo(targetIndex) {
    // motionDirection = 1 if user switches to next question, -1 if they go back one question
    motionDirection.current = 0 < targetIndex - currentQuestion.index ? 1 : -1

    // index of current question cannot be negative and cannot be larger than the amount of questions
    if (targetIndex <= questions.length + 1) {
      setCurrentQuestion((prevQuestion) => ({ ...prevQuestion, index: targetIndex }))
    }

    // for each question, set the inputName.
    if (targetIndex >= 0 && targetIndex < questions.length) {
      setCurrentQuestion((prevQuestion) => ({
        ...prevQuestion,
        inputName: questions[targetIndex].inputName,
      }))
    } 
  }

  return (
    <AnimatePresence key={currentQuestion.index}>
      <div className='min-h-[300px]'>
        {currentQuestion.index < questions.length && (
          <AllQuestions
            // relevant to the AllQuestions component
            questions={questions}
            currentIndex={currentQuestion.index}
            moveTo={moveTo}
            motionDirection={motionDirection}
            // only relevant for its input
            inputName={currentQuestion.inputName}
            currentQuestion={questions[currentQuestion.index]}
            emoji={questions[currentQuestion.index].emoji}
            form={form}
          />
        )}
        {currentQuestion.index === questions.length && (
          <VerifyStep
            motionDirection={motionDirection}
            form={form}
            setCurrentQuestion={setCurrentQuestion}
            questions={questions}
            activeNav={activeNav}
          />
        )}
        {currentQuestion.index === questions.length + 1 && (
          <>
            {activeNav === 0 && <ResultPage moveTo={moveTo} />}
            {activeNav === 1 && <CalorieResultPage moveTo={moveTo} />}
            {activeNav === 2 && <WeightResultPage moveTo={moveTo}/>}
          </>
        )}
      </div>
    </AnimatePresence>
  )
}

export default Modal
