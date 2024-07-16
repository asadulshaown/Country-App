import React,{useEffect,useState} from 'react';

import { v4 as uuidv4 } from 'uuid'; 
import '.././node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Countries from './Component/Countries';
import Search from './Component/Search';
import IsLoadingMessage from './Component/IsLoadingMessage';
import Count from './Component/Count';



function App() {
  const[isLoading,setIsLoading]=useState(true)
  const[error,setError]=useState(null)
  const[countries,setCountries]=useState([])

  const url="https://restcountries.com/v3.1/all"

  const fetchData=async (url)=>{
  setIsLoading(true)
  try{    
     const response=await fetch(url);
     const data= await response.json();
     setCountries(data);
     isLoading(false);
     setError(null);
  }
  catch(err){
    setIsLoading(false);
    setError(err);
  }

}
useEffect(()=>{
 
  setTimeout(()=>{
    fetchData(url)
  },3000)
 
},[])

  const country=countries && countries.map((data)=><Countries name={data.name.common} key={uuidv4()} img={data.flags.png} people={data.population.toString() } region={data.region
   } area={data.area} />  )
   

   const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setCountries(newCountries);
  };
 
 
  return (
    <div className="container-sm border border-2 mt-5 justity-conten-center text-center align-item-center p-4">
      <h1>Country App</h1>
      <Search onSearch={handleSearch}  />
      <Count countCountries={countries} />
      {isLoading && <IsLoadingMessage />}
      <p>{error && error.massage}</p>
      
       <div className='row mt-5 p-2'>
        {
          country 
        }
       </div>
      </div>
    
  );
}

export default App;
