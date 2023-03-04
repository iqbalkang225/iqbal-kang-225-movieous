import React from 'react'

const LiveSearchButton = ({ active, onClick }) => {
  const handleOnClick = () => onClick()

  const renderClasses = active ? 'text-white' : 'text-[#aaa] cursor-not-allowed '

  return (
    <button
      onClick={handleOnClick}
      type='button'
      className={`absolute right-2 top-0 bg-transparent text-xs capitalize ${renderClasses}`}
    >
      view all
    </button>
  )
}

export default LiveSearchButton
