import React from 'react'

const Count = (props) => {
    const countCountries=props.countCountries.length //set lenght
  return (
    <div className='mt-2 p-2 '>
            <div className='d-flex justify-content-center'>
            <h5>
                Amount Of Search Country:- {countCountries}
            </h5>
            
            
            </div>
      
    </div>
  )
}

export default Count