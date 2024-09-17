import { useState } from 'react'
import ModeIcon from '../assets/images/ModeIcon.svg'
import CustomModal from './CustomModal'
import Button from './Button'
import EmptyImg from '../assets/images/emptyimg.png'
import CaruselSwiper from './CaruselSwiper/CaruselSwiper'

function Header({countries,setCountries,setIsLoading}){
  const [isOpenModal, setIsOpenModal] =useState(false)
  const [flag, setFlag] =useState(EmptyImg)
  const [name, setName] =useState("")
  const [capital, setCapital] =useState("")
  const [population, setPopuation] =useState("")
  function handleCancelBtnClick(){
    setIsOpenModal(false)
    setFlag(EmptyImg)
  }
  function handleSubmitCountry(e){
    e.preventDefault()
    const data ={
      id: countries.length ? countries[countries.length - 1].id +1: 1,
      name,capital,population,flag,
      isLiked: false,
      isBasket: false
    }
    setIsOpenModal(false)
    setIsLoading(true)
    setTimeout(() =>{
      setIsLoading(false)
      setCountries([data, ...countries])
    },1000)
    setName("")
    setCapital("")
    setPopuation("")
    setFlag(EmptyImg)

  }
  return(
    <>
   <header className="px-[80px] py-[20px] bg-white mb-[48px] shadow-lg">
    <div className="flex justify-between items-center">
    <h1 className="text-[24px] font-extrabold">Where in the world?</h1>
    <div className='flex space-x-4 items-center'>
    <button className=" flex items-center space-x-3">
      <img src={ModeIcon} alt="Modeicon" width={18} height={18}/>
      <p className='text-[16px] font-semibold'>Dark Mode</p>
    </button>
    <button onClick={() =>setIsOpenModal(true)} className=' bg-gray-500 text-white p-[4px]  rounded-md font-semibold text-[14px]'>Add Country</button>
    </div>
    </div>
   </header>
    <CaruselSwiper/>
   <CustomModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
<form onSubmit={handleSubmitCountry} autoComplete='off' >
<div className='flex' >
  <label className='w-[49%]'>
    <input onChange={(e) => setFlag(URL.createObjectURL(e.target.files[0]))} className='hidden' type='file'/>
    <img className='w-[90%]' src={flag} alt='Choose img'/>
  </label>
  <div className='w-[49%] space-y-4 '>
    <input onChange={(e) => setName(e.target.value)} className=' w-full p-2 rounded-md outline-none border-[1px] border-slate-500' required placeholder='Enter country name' name='name'/>
    <input onChange={(e) => setCapital(e.target.value)}  className=' w-full p-2 rounded-md outline-none border-[1px] border-slate-500' required placeholder='Enter country capital' name='capital'/>
    <input onChange={(e) => setPopuation(e.target.value)} className=' w-full p-2 rounded-md outline-none border-[1px] border-slate-500' required placeholder='Enter country population' name='population'/>
  </div>
      </div>
      <div className='flex space-x-4 items-center justify-between'>
     <Button onClick={handleCancelBtnClick} type={"button"} title={"Cancel"} extraStyle={"bg-red-500 text-white mt-[20px] w-[49%]"}/>
     <Button type={"submit"} title={"Submit"} extraStyle={"bg-green-500 text-white mt-[20px] w-[49%]"}/>
      </div>
</form>
   </CustomModal>
    </>
  )
}
export default Header