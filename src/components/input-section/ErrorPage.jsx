import { HiArrowSmRight } from 'react-icons/hi'

const ErrorPage = () => {
  return (
    <>
      <div className='relative w-full h-full grid sm:grid-cols-3'>
        <img
          className='absolute scale-125 xs:scale-100 bottom-0 right-0 translate-x-1/2 translate-y-1/2'
          src={process.env.PUBLIC_URL + '/error.png'}
          alt=''
        />
        <div className='relative z-10 col-span-2 px-10 py-6 md:px-15 md:py-9 lg:px-20 lg:py-12 mb-32'>
          <h2 className='text-7xl lg:text-[100px] mb-6 font-semibold text-indigo-600'>Oops!</h2>
          <h3 className='text-black text-lg lg:text-2xl'>
            Something went wrong while calculating your results. Please try again later.
          </h3>
          <div className='flex'>
            <a href='/' className='text-indigo-600 text-md sm:text-lg md:text-2xl sm:mt-6 py-3 mt-3 flex items-center gap-x-2 underline underline-offset-2'>
              Back to Homepage <HiArrowSmRight className='text-xl md:text-3xl mt-1' />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ErrorPage
