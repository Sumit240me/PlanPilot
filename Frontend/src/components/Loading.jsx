import React from 'react'

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-1/2 mt-12">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      <div className="ml-4 text-lg text-gray-700">Loading...</div>
    </div>
  )
}

export default Loading
