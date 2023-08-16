// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { navLinks } from '../../Data';
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { Link } from 'react-scroll';
// import NavLink from './NavLink';
import MobileNavLinks from './MobileNavLinks';


const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const [active, setActive] = useState(null);
    useEffect(() => {
        const scrollActive = () => {
        setActive(window.scrollY > 20);
        };
        window.addEventListener("scroll", scrollActive);
        return () => window.removeEventListener("scroll", scrollActive);
    }, [active]);
  return (
    <div className={`${active ? "shadow bg-Solitude" : ""} fixed w-full top-0 left-0 z-20 px-10`}>
        <div>
            <div className={`${active ? "py-2 transition-all duration-300" : "py-4"}container mx-auto flex items-center justify-between px-2`}>
                <div className='flex items-center gap-4'>
                    <HiMenuAlt1 className='text-3xl sm:hidden cursor-pointer' onClick={() => setToggle(true)}/>
                    <div className='text-xl text-teal uppercase tracking-wide font-bold'>S-Learn</div>
                </div>
                <div className='sm:flex items-center justify-between hidden'>
                    <li className='list-none cursor-pointer mr-8'>
                        <Link
                            to={'/'}
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-50}
                            className="font-bold transition-all duration-300"
                        >
                            
                            <a href="home">Home</a>
                            <a href="home" className='mx-2'>About</a>
                            <a href="home">Courses</a>
                            <a href="home" className='mx-2'>Teacher</a>
                            <a href="home">Contact</a>
                          
                        </Link>
                    </li>
                    {/* {navLinks.map((navLink) => {
                        return <NavLink key={navLink.id} {...navLink} />;
                    })} */}
                </div>
                <button className='py-3 px-6 font-bold text-sm border border-solid rounded-lg border-gray'>Sign Up</button>
                {toggle && (
                    <div className='fixed h-full w-96 top-0 left-0 z-20 bg-Teal text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8'>
                        {navLinks.map((navLink) => {
                            return <MobileNavLinks key={navLink.id} {...navLink}/>
                        })}
                        <HiX className='absolute right-12 top-12 text-3xl cursor-pointer' onClick={(prev) => setToggle(!prev)}/>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Navbar