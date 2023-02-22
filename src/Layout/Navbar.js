import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.jpg'

const Navbar = () => {

    return (
        <div className="navbar px-10 bg-base-100">
        <div className="flex-1">
          <Link className="btn text-neutral btn-ghost normal-case text-xl">Arshika Islam</Link>
        </div>
       
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={avatar} alt="avatar" />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-neutral text-primary rounded-box w-52">
              <li>
                <Link className="justify-between">
                  Profile
                </Link>
              </li>
              <li><Link>About Me</Link></li>
              
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Navbar;