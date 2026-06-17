import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Feature/auth/components/AuthContext';

function Sidebar(){
  const {logout, error} = useAuth()
  const navigate = useNavigate()
  const handlelogout = async () => {
    await logout()
    navigate('/login')
  }
  return (<>
        <div style={{ width: 300}} 
        className='text-white text-2xl min-h-screen bg-black mr-0 flex flex-col justify-between'>
          <div className='m-12 flex flex-wrap flex-col'>
            <p>sidebar</p>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/history'>History</Link>
            <Link to='/analytics'>Analytics</Link>
            <Link to='/export'>export</Link>
            <Link to='/profile'>Profile</Link>
          </div>
          <div className='text-gray-300 bg-gray-700 w-22 p-1 m-12 hover:bg-gray-600 hover:text-gray-200'>
            <button className='' id='logout'onClick={handlelogout}>Logout</button></div>
        </div>
        </>
  );
}
export default Sidebar;