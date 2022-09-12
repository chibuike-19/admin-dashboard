import React from 'react'

const Buttons = ({color, bgColor, text, size, borderRadius}) => {
  return (
    <div>
      <button style={{color, backgroundColor: bgColor, borderRadius, }} className={`text-${size} hover:drop-shadow-xl p-3`}>
        {text}
      </button>
    </div>
  )
}

export default Buttons