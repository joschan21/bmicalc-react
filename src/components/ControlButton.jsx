import React from 'react'

const ControlButton = ({ handleClick, isDisabled, label }) => {
  return (
    <button
      className='bg-primary px-6 py-3 rounded-lg disabled:bg-gray-300 disabled:text-gray-600 transition'
      disabled={isDisabled}
      onClick={() => handleClick()}>
      {label}
    </button>
  )
}

export default ControlButton
