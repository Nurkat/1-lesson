import React from 'react'

function CountryCard({item}) {
  return (
    <li className="w-[250px] p-2 rounded-md bg-white shadow-md">
    <img src={item.flag} alt="Flag" width={"100%"}/>
    <strong className="text-[20px] font-bold">{item.name}</strong>
    <p>Population:{item.population}</p>
    <p>Region:{item.name}</p>
    <p>Capital:{item.capital}</p>
  </li>
  )
}

export default CountryCard