import React, { Fragment, useState } from 'react'
import { changeMobile } from '../redux/responsiveSlice'
import { Listbox, Transition } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import { HiCheck, HiSelector } from 'react-icons/hi'

const TopBar = () => {
  const dispatch = useDispatch()

  const isMobile = useSelector((state) => state.responsive.mobileView)

  return (
    <div className='flex overflow-hidden relative justify-between items-center py-2 px-6 h-16 w-full bg-gray-900/80 backdrop-blur-md shadow-md text-white'>
      <svg
        className='absolute pointer-events-none opacity-50 top-0'
        aria-hidden='true'
        width='1148'
        height='248'>
        <defs>
          <filter
            x='-76.9%'
            y='-76.9%'
            width='253.8%'
            height='253.8%'
            filterUnits='objectBoundingBox'
            id='top-a'>
            <feGaussianBlur stdDeviation='50' in='SourceGraphic'></feGaussianBlur>
          </filter>
          <filter
            x='-76.9%'
            y='-76.9%'
            width='253.8%'
            height='253.8%'
            filterUnits='objectBoundingBox'
            id='top-b'>
            <feGaussianBlur stdDeviation='50' in='SourceGraphic'></feGaussianBlur>
          </filter>
        </defs>
        <g transform='translate(0 -128)' fill='none' fillRule='evenodd'>
          <circle
            fill='#10B981'
            opacity='.48'
            filter='url(#top-a)'
            cx='931.501'
            cy='97.501'
            r='97.501'></circle>
          <circle
            fillOpacity='.48'
            fill='#6366F1'
            filter='url(#top-b)'
            cx='209.501'
            cy='166.501'
            r='97.501'></circle>
        </g>
      </svg>
      <div className='flex items-center flex-1 h-full'>
        <a className='h-3/4' href='https://www.fiverr.com/nayless' target='_blank' rel='noopener noreferrer'>
          <img
            className='h-full'
            src={process.env.PUBLIC_URL + '/nayless-logo.jpg'}
            alt='nayless logo'
          />
        </a>
      </div>
      <div className='hidden h-full md:flex md:items-center gap-x-6'>
        <div className='cursor-pointer' onClick={() => dispatch(changeMobile(false))}>
          <svg
            className={`transition ${isMobile ? 'fill-gray-500' : 'fill-white'}`}
            width='32'
            height='32'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M10 27v-2h12v2z'></path>
            <path d='M6 7v14h20V7H6zm22-2v18H4V5h24z'></path>
          </svg>
        </div>
        <div className='cursor-pointer' onClick={() => dispatch(changeMobile(true))}>
          <svg
            className={`transition ${isMobile ? 'fill-white' : 'fill-gray-500'}`}
            width='32'
            height='32'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M13 24v2H6a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v9h-2V6H6v18h7z'></path>
            <path d='M17 15v11h9V15h-9zm0-2h9a2 2 0 012 2v11a2 2 0 01-2 2h-9a2 2 0 01-2-2V15a2 2 0 012-2z'></path>
          </svg>
        </div>
      </div>
      {/* Select Menu for Pages */}
      <div className='flex items-center flex-1 justify-end'>
        <a
          href='https://www.fiverr.com/nayless'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-indigo-600 transition hover:bg-indigo-700 py-1 px-4 rounded-md text-white font-medium text-md'>
          Contact me
        </a>
      </div>
    </div>
  )
}

export default TopBar
