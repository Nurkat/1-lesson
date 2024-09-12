import ModeIcon from '../assets/images/ModeIcon.svg'

function Header(){
  return(
   <header className="px-[80px] py-[20px] bg-white mb-[48px] shadow-lg">
    <div className="flex justify-between items-center">
    <h1 className="text-[24px] font-extrabold">Where in the world?</h1>
    <button className=" flex items-center space-x-3">
      <img src={ModeIcon} alt="Modeicon" width={18} height={18}/>
      <p className='text-[16px] font-semibold'>Dark Mode</p>
    </button>
  
    </div>
   </header>
  )
}
export default Header