"use client";


import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { LiaBarsSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";
import logo from '../components/image/Frame 5.png';
import image1 from '../components/image/image1.png';
import image3 from '../components/image/image3.png';

const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null); 
    const menuButtonRef = useRef(null);

    const handleClickOutside = (event) => {
        // Close menu if clicked outside of menu and toggle button
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            (!menuButtonRef.current || !menuButtonRef.current.contains(event.target))
        ) {
            setToggle(false);
        }
    };

    useEffect(() => {
        // Add event listener for clicks outside the component
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className='relative z-30 w-full'>
            <header className=' container mx-auto flex justify-between items-center py-[18px] sm:py-[23px] lg:py-[32px] relative px-[24px] sm:px-[0]'>
                <div className='lg:hidden relative top-[-11px]'>
                    
                    <div 
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-100' : 'opacity-0 -translate-x-2'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <VscChromeClose className='text-white text-[24px] absolute' />
                    </div>
                    <div ref={menuButtonRef}
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-0 translate-x-2' : 'opacity-100'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <LiaBarsSolid className='text-white text-[24px] absolute' />
                    </div>
                </div>
                <h1 className='Froggo-Logo w-[120px] lg:w-[180px] 2xl:w-[207px]'><Image src={logo} alt=''/></h1>
                <div clssName="navbar-items-mainbackground">
                <nav
                    ref={menuRef}
                    className={`navbar-items-main absolute lg:top-0 top-[100%] lg:right-0 lg:relative 
                                duration-1000 z-50 lg:opacity-100 flex justify-between items-start lg:items-center 
                                gap-[22px] lmd:gap-[28px] lg:gap-[32px] xl:gap-[40px] 2xl:gap-[48px] 
                                lg:flex-row flex-col p-[20px] lg:p-[4px] overflow-hidden sm:backgroundimage
                                transition-all ease-in-out
                                ${toggle ? 'right-[10px] opacity-100' : 'right-[130%] opacity-10'}`}
                    >

                    {/* <div className='absolute'><Image className='w-[110%] h-[61px] left-0 ' src={image2} alt=''/></div> */}
                    <p className={`Link-manu-bars  sm:mr-3 lg:mr-4`} href="#Logo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61 61" fill="none">
                    <circle cx="30.5" cy="30.5" r="30.5" fill="#1FFFA9"/>
                    <rect x="26.0537" y="15.9995" width="8.89346" height="9.08694" fill="#0A0D0C"/>
                    <rect x="16" y="25.8596" width="8.89346" height="9.08694" fill="#0A0D0C"/>
                    <rect x="36.1064" y="25.8596" width="8.89346" height="9.08694" fill="#0A0D0C"/>
                    <path d="M16 24.893C16 19.9812 19.9817 15.9995 24.8935 15.9995V25.0865H16V24.893Z" fill="#0A0D0C"/>
                    <path d="M16 36.1068C16 41.0185 19.9817 45.0002 24.8935 45.0002V35.9133H16V36.1068Z" fill="#0A0D0C"/>
                    <path d="M34.9473 36.1068C34.9473 41.0185 30.9655 45.0002 26.0538 45.0002V35.9133H34.9473V36.1068Z" fill="#0A0D0C"/>
                    <path d="M36.1064 36.1068C36.1064 41.0185 40.0882 45.0002 44.9999 45.0002V35.9133H36.1064V36.1068Z" fill="#0A0D0C"/>
                    <path d="M36.1064 15.9995C41.0182 15.9995 44.9999 19.9812 44.9999 24.893V25.0865H36.1064V15.9995Z" fill="#0A0D0C"/>
                    </svg></p>
                    <Link className=' group Link-manu-bar relative w-fit h-[61px] flex justify-center items-center' href="Bots">Bots
                    <svg xmlns="http://www.w3.org/2000/svg" className='hidden group-hover:block absolute w-full h-[61px] top-[-13px] left-0' width="65" height="69" viewBox="0 0 65 69" fill="none">
  <g filter="url(#filter0_f_199_312)">
    <rect x="2" y="-1" width="61" height="70" fill="url(#paint0_linear_199_312)" fillOpacity="0.08"/>
  </g>
  <path d="M2 1.11933C2 -1.15571 3.84429 -3 6.11933 -3H58.8979C61.1634 -3 63 -1.16341 63 1.10213V1.10213C63 3.65567 60.6536 5.58312 58.1436 5.11351C24.2982 -1.21886 42.5619 -1.20447 6.84243 5.15669C4.33039 5.60405 2 3.6709 2 1.11933V1.11933Z" fill="#1FFFA9"/>
  <defs>
    <filter id="filter0_f_199_312" x="0" y="-3" width="65" height="74" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_199_312"/>
    </filter>
    <linearGradient id="paint0_linear_199_312" x1="32.5" y1="-1" x2="32.5" y2="69" gradientUnits="userSpaceOnUse">
      <stop stopColor="#1FFFA9"/>
      <stop offset="1" stopColor="#1FFFA9" stopOpacity="0"/>
    </linearGradient>
  </defs>
                    </svg>
                    </Link>
                    <Link className='group Link-manu-bar relative w-fit h-[61px] flex justify-center items-center duraction-200' href="Markets">Markets
                    <Image className='hidden group-hover:block absolute w-full h-[61px] top-[-2px] left-0' src={image3} alt='Loading...'/>
                    </Link>

                    <Link className='group Link-manu-bar relative w-fit h-[61px] flex justify-center items-center duraction-200' href="Trade">Trade
                    <Image className='hidden group-hover:block absolute w-full h-[61px] top-[-2px] left-0' src={image3} alt='Loading...'/></Link>

                    <Link className='group Link-manu-bar relative w-fit h-[61px] flex justify-center items-center duraction-200' href="Token">Token
                    <Image className='hidden group-hover:block absolute w-full h-[61px] top-[-2px] left-0' src={image3} alt='Loading...'/></Link>

                    <Link className='group Link-manu-bar relative w-fit h-[61px] flex justify-center items-center duraction-200' href="AI Assistant">AI Assistant
                    <Image className='hidden group-hover:block absolute w-full h-[61px] top-[-2px] left-0' src={image3} alt='Loading...'/></Link>

                    <p className='Link-manu-barss Link-manu-bars sm:ml-3 lg:ml-4' href="button"><Image src={image1} alt=''/></p>
                </nav>
                </div>

                
                <ul className='relative'>
                    <button className='founderbtn flex justify-center items-center gap-[12px]'>Sign in<svg xmlns="http://www.w3.org/2000/svg" className='absolute top-0 right-0' width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M0 1H7V8" stroke="white"/>
                    </svg></button>
                </ul>
                
                
            </header>
            <div className='navbarunderborder'></div>
        </div>
    );
};

export default NavBar;