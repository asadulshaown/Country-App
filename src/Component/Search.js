import React,{useState,useEffect} from 'react'


const Search = (props) => {
    const[searchText,setSearchText]=useState("")  
    const handelChange=(e)=>{
        setSearchText(e.target.value)        
    }
    useEffect(()=>{
        // accept searchText by props
       props.onSearch(searchText) 
    },[searchText])

  return (
    <div>
        <input type='text' placeholder='Search Country' className='search ' onChange={handelChange} value={searchText} searchText={searchText}/>
    </div>
  )
}

export default Search