import Modal from './input-section/Modal'
import Footer from './Footer'
import Faq from './Faq'
import Header from './Header'
import ErrorPage from './input-section/ErrorPage'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

export default function DesktopLayout({ title, description, questions }) {
  const error = useSelector((state) => state.error.apiError)

  const transition = { duration: 4, yoyo: Infinity, ease: 'easeInOut' }

  return (
    <>
      <div className='bg-gray-50'>
        <div className='relative overflow-hidden'>
          <Header title={title} description={description} />
          <div className='relative'>
            <div className='absolute inset-0 flex flex-col' aria-hidden='true'>
              <div className='flex-1' />
              <div className='flex-1 w-full bg-gray-800' />
            </div>
            <motion.div animate={{opacity: [0, 1]}} className='relative max-w-7xl mx-auto px-4 sm:px-6'>
              <div className='absolute z-10 top-0 right-0 -translate-y-1/2 w-32 h-32'>
                <motion.img
                  animate={{ opacity: [0, 1], rotate: [0, 15] }}
                  src={process.env.PUBLIC_URL + '/apple.svg'}
                />
              </div>
              <div className='relative overflow-hidden rounded-lg px-2 shadow-lg bg-white py-12 border-gray-100 border-[12px] max-w-full'>
                {!error ? <Modal questions={questions} /> : <ErrorPage />}
              </div>
            </motion.div>
          </div>
        </div>
        <Faq />
      </div>
      <Footer />
    </>
  )
}
