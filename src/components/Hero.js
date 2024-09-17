import CountryCard from "./CountryCard"
import SearchIcon from '../assets/images/searchicon.svg'
import { useState } from "react"
import Loading from '../assets/images/loadingimd.png'

function Hero({allCountries,countries,setCountries,isLoading,setIsLoading}){
 
  

  function handleSearchCountry (e){
    setIsLoading(true)
    setTimeout(()=>{
      const searchValue = allCountries.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
      setCountries(searchValue)
      setIsLoading(false)
    },1000)
  }
  function handleChangeSelect(e){
   const selectedCountry = allCountries.filter(item => item.id == e.target.value)
   setIsLoading(true)
   if(e.target.value == 0){
    setCountries(allCountries)
    setIsLoading(false)
   }
   else(
     setTimeout(()=> {
      setCountries(selectedCountry)
      setIsLoading(false)
     },500)
   )
  }
  return(
    <main className="px-[80px] py-[23px] ">
      <section>
    <div className="flex justify-between items-center relative ">
    <img className="absolute left-3" src={SearchIcon}/>
      <input onChange={handleSearchCountry} className="w-[400px] bg-white py-[10px] pl-[60px] text-[#848484] text-[14px] font-normal" type="search" placeholder="Search for a country..."/>
     <select onChange={handleChangeSelect} className="w-[200px] py-[10px] pl-[20px]">
       <option value={0}>All</option>
      {allCountries.map(item =>(
        <option key={item.id} value={item.id}>{item.capital}</option>
      ))}
     </select>
    </div>
    <ul className="flex flex-wrap justify-between gap-5 mt-[40px]">
     { isLoading ? <img className="mx-auto mt-[100px]" src={Loading} alt="Loading" width={100} /> :
      countries.map(item =><CountryCard key={item.id} item={item}/>)
      }
    </ul>
      </section>
    </main>
  )
}
export default Hero