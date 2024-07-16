import React from 'react'

const Count = (props) => {
    const countCountries=props.countCountries.length
  return (
    <div className='mt-2 p-2 '>
            <div className='d-flex justify-content-center'>
            <h5>
                Amount Of Search Country:
            </h5>
            
            <h4>
            {countCountries}
            </h4>
            </div>
      
    </div>
  )
}

export default Count