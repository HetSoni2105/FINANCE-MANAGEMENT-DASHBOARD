import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div style={{}} 
    className='text-white bg-gray-600 h-16 ml-0 flex justify-between items-center'>
        <div>navbar <p>Greetings</p></div>
        <div className='flex space-x-2 float-right'>
            <div>
                <button>toggle</button>
            </div>
            <div>
                <Link to='/profile'>profile</Link>
            </div>
        </div>
    </div>  
    )
}

export default Navbar