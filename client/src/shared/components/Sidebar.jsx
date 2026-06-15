import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar(){
  return (<>
        <div style={{ 
          width: 300
        }} className='text-white text-2xl h-250 bg-black mr-0'>
          <div className='m-10 flex flex-wrap flex-col'>
            <p>sidebar</p>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/history'>History</Link>
            <Link to='/analytics'>Analytics</Link>
            <Link to='/export'>export</Link>
            <Link to='/profile'>Profile</Link>
          </div>
        </div>
        </>
  );
}
export default Sidebar;