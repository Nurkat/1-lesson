import CountryCard from "./CountryCard"
import SearchIcon from '../assets/images/searchicon.svg'

function Hero(){
  const countries = [
    {
      id: 1,
      name: "Wallis and Futuna",
      capital: "Mata-Utu",
      population: 11750,
      flag: "https://flagcdn.com/wf.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 2,
      name: "Iceland",
      capital: "Reykjavik",
      population: 366425,
      flag: "https://flagcdn.com/is.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 3,
      name: "Luxembourg",
      capital: "Luxembourg",
      population: 632275,
      flag: "https://flagcdn.com/lu.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 4,
      name: "Mali",
      capital: "Bamako",
      population: 20250834,
      flag: "https://flagcdn.com/ml.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 5,
      name: "Comoros",
      capital: "Moroni",
      population: 869595,
      flag: "https://flagcdn.com/km.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 6,
      name: "Australia",
      capital: "Canberra",
      population: 25687041,
      flag: "https://flagcdn.com/au.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 7,
      name: "Estonia",
      capital: "Tallinn",
      population: 1331057,
      flag: "https://flagcdn.com/ee.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 8,
      name: "Canada",
      capital: "Ottawa",
      population: 38005238,
      flag: "https://flagcdn.com/ca.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 9,
      name: "Belarus",
      capital: "Minsk",
      population: 9398861,
      flag: "https://flagcdn.com/by.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 10,
      name: "Guyana",
      capital: "Georgetown",
      population: 786559,
      flag: "https://flagcdn.com/gy.svg",
      isLiked: false,
      isBasket: false
    }
  ]
  return(
    <main className="px-[80px] py-[23px] ">
      <section>
    <div className="flex justify-between items-center relative ">
    <img className="absolute left-3" src={SearchIcon} alt="SearchIcon" width={18} height={18}/>
      <input className="w-[400px] bg-white py-[10px] pl-[60px] text-[#848484] text-[14px] font-normal" type="search" placeholder="Search for a country..."/>
     <select className="w-[200px] py-[10px] pl-[20px]">
       <option>Africa</option>
       <option>Germany</option>
       <option>Brazil</option>
       <option>Canada</option>
       <option>Afghanistan</option>
     </select>
    </div>
    <ul className="flex flex-wrap justify-between gap-5 mt-[40px]">
     {
      countries.map(item =><CountryCard key={item.id} item={item}/>)
      }
    </ul>
      </section>
    </main>
  )
}
export default Hero