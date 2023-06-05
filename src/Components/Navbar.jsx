import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
     
        <div className="navbar bg-accent px-4 py-4 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-3xl lg:px-52 md:px-36">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold">
                        <li>
                            <NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='statistics' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>
                                Statistics
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='appliedJobs' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>
                                Applied Jobs
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='blog' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>
                                Blog
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <Link to='/' className="normal-case text-3xl font-extrabold "> Career-Tronix</Link>
            </div>
            <div className="navbar-center hidden lg:flex font-bold">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink to='/' title='Home' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='statistics' title='Statistics' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>
                            Statistics
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='appliedJobs' title='Applied Jobs' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>
                            Applied Jobs
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='blog' title='Blog' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>
                            Blog
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-primary text-white">Star Applying</a>
            </div>
        </div>


     
   
        
    );
};

export default Navbar;