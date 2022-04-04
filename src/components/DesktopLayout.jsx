/* This example requires Tailwind CSS v2.0+ */
import Modal from './Modal'
import Footer from './Footer'
import Faq from './Faq'
import Header from './Header'
import ErrorPage from './ErrorPage'
import { useSelector } from 'react-redux'

export default function DesktopLayout({ title, description, questions }) {
  const error = useSelector((state) => state.error.apiError)

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
            <div className='relative max-w-7xl mx-auto px-4 sm:px-6'>
              <img
                className='absolute saturate-[0.75] top-0 -translate-y-full right-0 hidden lg:block w-3/5 lg:w-2/5'
                src={process.env.PUBLIC_URL + '/bmi-illustration.png'}
                alt='bmi illustration'
              />
              <div className='relative overflow-hidden rounded-lg px-2 shadow-lg bg-white py-12 border-gray-100 border-[12px] max-w-full'>
                {!error ? <Modal questions={questions} /> : <ErrorPage />}
              </div>
            </div>
          </div>
        </div>
        <Faq />
      </div>
      <Footer />
    </>
  )
}
