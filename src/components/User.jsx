import React from 'react'
import Girl1 from '../assets/girl1.jpg';

const User = ({userData}) => {
    
  return (
    <>
      <div className="user--container">
        <div className="profile">
            <img src={Girl1} alt='girl img'/>
        </div>
        <div className="info">
            
        </div>
        <div className="tick">

        </div>
      </div>
    </>
  )
}

export default User
