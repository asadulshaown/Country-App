import React from 'react'

const Countries = (props) => {  
  //accept props
  return (
    <>
      
        <div className='col-md'>
          <div className='card m-2 '>
            <div className='card-body '>
              <img src={props.img} className='img'alt={props.name}/>
              <div className='text-start'>
              <h2 className='card-title'>
                Country:{props.name}
              </h2>
              <h5>
               Region:{props.region}
              </h5>
              <h6 className='card-text'>
                Total people:{props.people}
              </h6>
              
              <h6>
                Area:{props.area}
              </h6>
              </div>
            </div>
            
          </div>
        </div>
      
    </>
  )
}

export default Countries