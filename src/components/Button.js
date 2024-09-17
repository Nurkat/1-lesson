import React from 'react'

function Button({title,extraStyle,type,onClick}) {
  return (
  <button onClick={onClick} type={type} className={`${extraStyle} px-2 py-1 rounded-md font-semibold text-[18px] hover:opacity-65 duration-300`}>{title}</button>
  )
}

export default Button