import MoonLoader from 'react-spinners/MoonLoader'

const Spinner = () => {
  return (
    <>
      <div className='w-full flex flex-col items-center gap-y-6'>
        <h3 className='text-black text-2xl font-semibold'>Calculating your results...</h3>
        <MoonLoader color='#4f46e5' />
      </div>
    </>
  )
}

export default Spinner
