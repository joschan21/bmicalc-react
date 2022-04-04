/* This example requires Tailwind CSS v2.0+ */
import { useEffect } from 'react'
import { HiOutlineCheck } from 'react-icons/hi'
import { motion } from 'framer-motion'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProgressCircles({ currentIndex, motionDirection, questions }) {
  // A list of all questions to be modified
  let list = questions

  useEffect(() => {
    if(currentIndex === 0) {
      list.map((listItem, index) => {
        if(index !== 0) {
          listItem.status = 'upcoming'
        }
      })
    }

    if (motionDirection.current > 0) {
      if (currentIndex > 0) list[currentIndex - 1].status = 'complete'
      list[currentIndex].status = 'current'
    }
    if (motionDirection.current < 0) {
      list[currentIndex + 1].status = 'upcoming'
      list[currentIndex].status = 'current'
      if (currentIndex > 0) list[currentIndex - 1].status = 'complete'
    }
  }, [currentIndex])

  function getProps() {
    if (motionDirection.current > 0) {
      return {
        animate: 'enter',
        initial: 'initial',
        variants: {
          initial: {
            opacity: 0,
          },
          enter: {
            opacity: 1,
          },
        },
      }
    } else
      return {
        animate: 'enter',
        initial: 'initial',
        variants: {
          initial: {
            opacity: 1,
          },
          enter: {
            opacity: 1,
          },
        },
      }
  }

  return (
    <nav aria-label='Progress'>
      <ol role='list' className='flex items-center'>
        {list.map((step, stepIdx) => (
          <li
            key={step.inputName}
            className={classNames(stepIdx !== list.length - 1 ? 'pr-8 sm:pr-20' : '', 'relative')}>
            {step.status === 'complete' ? (
              <>
                {motionDirection.current > 0 && (
                  <div className='absolute inset-0 flex items-center' aria-hidden='true'>
                    {currentIndex - 1 === stepIdx ? (
                      <motion.div
                        style={{ originX: 0 }}
                        animate={{ scaleX: [0, 1] }}
                        transition={{ duration: 0.3 }}
                        className='h-0.5 w-full absolute bg-indigo-600'
                      />
                    ) : (
                      <div className='h-0.5 absolute w-full bg-indigo-600' />
                    )}
                    <div className='h-0.5 w-full bg-gray-200' />
                  </div>
                )}
                {motionDirection.current < 0 && (
                  <div className='absolute inset-0 flex items-center' aria-hidden='true'>
                    <div className='h-0.5 absolute w-full bg-indigo-600' />
                  </div>
                )}
                <a
                  href='#'
                  className='relative w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full hover:bg-indigo-900'>
                  <HiOutlineCheck className='w-5 h-5 text-white' aria-hidden='true' />
                  <span className='sr-only'>{step.name}</span>
                </a>
              </>
            ) : step.status === 'current' ? (
              <>
                <div className='absolute inset-0 flex items-center' aria-hidden='true'>
                  {motionDirection.current < 0 && (
                    <motion.div
                      style={{ originX: 0 }}
                      animate={{ scaleX: [1, 0] }}
                      transition={{ duration: 0.3 }}
                      className='h-0.5 absolute w-full bg-indigo-600'
                    />
                  )}
                  <div className='h-0.5 w-full bg-gray-200' />
                </div>

                <motion.a
                  {...getProps()}
                  href='#'
                  className='relative z-10 translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full'
                  aria-current='step'>
                  <span className='h-2.5 w-2.5 bg-indigo-600 rounded-full' aria-hidden='true' />
                  <span className='sr-only'>{step.name}</span>
                </motion.a>
                <a
                  href='#'
                  className='relative -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-200 rounded-full'
                  aria-current='step'>
                  <span className='h-2.5 w-2.5 bg-gray-200 rounded-full' aria-hidden='true' />
                  <span className='sr-only'>{step.name}</span>
                </a>
              </>
            ) : (
              <>
                <div className='absolute inset-0 flex items-center' aria-hidden='true'>
                  <div className='h-0.5 w-full bg-gray-200' />
                </div>
                <a
                  href='#'
                  className='group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400'>
                  <span
                    className='h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300'
                    aria-hidden='true'
                  />
                  <span className='sr-only'>{step.name}</span>
                </a>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
