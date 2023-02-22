import React from 'react';
import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div className='max-w-8xl'>
      
          <Outlet />  
        </div>
    );
};

export default Main;