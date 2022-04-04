import React from 'react'

const Header = ({ title, description }) => {
  return (
    <div className='relative pt-6 pb-16 sm:pb-24'>
      <div className='mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl tracking-tight font-extrabold text-gray-900 sm:text-6xl md:text-7xl'>
            <span className='block'>Let's calculate your</span>
            <span className='block text-indigo-600'>{title}!</span>
          </h1>
          <p className='mt-3 max-w-md mx-auto lg:mx-0 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header
