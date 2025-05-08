import React,{useState,useEffect} from 'react'


const Search = (props) => {
    const[searchText,setSearchText]=useState("")
    
    
    const {onSearch} = props // accept searchText by props

    const handelChange=(e)=>{
      
        setSearchText(e.target.value)        
    }
const input = document.querySelector('input')
console.log(input.value);

    useEffect(()=>{     
      onSearch(searchText) 
    },[searchText])

  return (
    <div>
        <input type='text' placeholder='Search Country' className='search ' onChange={handelChange} value={searchText}/>
        

    </div>
  )
}

export default Search