import Navbar from './Navbar'

const PageNotFound = () => {
  return (
    <div className='min-h-screen flex flex-col bg-white'>
      <div className='bg-gray-900'>
        <Navbar />
      </div>
      <main className='flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex-shrink-0 flex justify-center'>
          <a href='/' className='inline-flex'>
            <span className='sr-only'>BMI Calculator</span>
            <img
              className='h-12 w-auto'
              src={process.env.PUBLIC_URL + '/logo-without-text.png'}
              alt=''
            />
          </a>
        </div>
        <div className='py-16'>
          <div className='text-center'>
            <p className='text-sm font-bold text-indigo-600 uppercase tracking-wide'>404 error</p>
            <h1 className='mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl'>
              Page not found.
            </h1>
            <p className='mt-2 text-base text-gray-500'>
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className='mt-6'>
              <a href='/' className='text-base font-medium text-indigo-600 hover:text-indigo-500'>
                Go back home<span aria-hidden='true'> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PageNotFound
