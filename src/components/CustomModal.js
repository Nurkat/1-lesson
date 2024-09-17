import React from 'react'
import { Children } from 'react'

function CustomModal({children, isOpenModal,setIsOpenModal}) {
   
  return (
    <div onClick={(e) => e.target.id == "modal" ? setIsOpenModal(false) : ""} className={`duration-300 fixed top-0 bottom-0 left-0 right-0 backdrop-blur ${isOpenModal ? "scale-1" : "scale-0"}`}  id='modal'>
        <div className='w-[500px] h-[300px] p-5  rounded-md bg-slate-300 absolute top-0 right-0 bottom-0 left-0 m-auto'>{children}</div>
    </div>
  )
}

export default CustomModal