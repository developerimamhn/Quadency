"use client";


import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { LiaBarsSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";
import logo from '../components/image/Frame 5.png';
import image12 from '../components/image/image12.png';
import image3 from '../components/image/image3.png';

const Footer = () => {
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
        <div className='relative '>
            <svg className='absolute bottom-0 left-[50%] translate-x-[-50%]' width="1161" height="552" viewBox="0 0 1161 552" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_1_1336)">
<ellipse cx="580.5" cy="474.5" rx="80.5" ry="159.5" fill="#1FFFA9"/>
</g>
<defs>
<filter id="filter0_f_1_1336" x="0" y="-185" width="1161" height="1319" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_1_1336"/>
</filter>
</defs>
            </svg>

            <div className='relative z-30 w-full'>
            <header className=' container mx-auto flex justify-between items-center relative px-[24px] sm:px-[0]'>
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
                                lg:flex-row flex-col p-[20px] lg:p-[4px] overflow-hidden
                                transition-all ease-in-out !bg-transparent
                                ${toggle ? 'right-[10px] opacity-100' : 'right-[130%] opacity-10'}`}
                    >


                    <Link className=' group Link-manu-bar relative w-fit h-[61px] flex justify-center items-center' href="Bots">Bots
                    </Link>
                    <Link className='group Link-manu-bar relative w-fit h-[61px] flex justify-center items-center duraction-200' href="/Markets">Markets
                    </Link>

                    <Link className='group Link-manu-bar relative w-fit h-[61px] flex justify-center items-center duraction-200' href="/Trade">Trade
                    </Link>

                    <Link className='group Link-manu-bar relative w-fit h-[61px] flex justify-center items-center duraction-200' href="/Token">Token
                    </Link>

                    <Link className='group Link-manu-bar relative w-fit h-[61px] flex justify-center items-center duraction-200' href="/AI Assistant">AI Assistant
                    </Link>

                    <Link className='group Link-manu-bar relative w-fit h-[61px] flex justify-center items-center duraction-200' href="/Contact">Contact
                    </Link>
                </nav>
                </div>

                
                <ul className='relative'>
                    <div className='flex justify-center items-center gap-[8px] md:gap-[18px] xl:gap-[20px] 2xl:gap-[24px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[25px] sm:w-[32px]' viewBox="0 0 32 32" fill="none">
                    <path d="M24.4341 7.4839L5.16865 14.9146C3.85375 15.4422 3.86155 16.1756 4.92898 16.5026L9.73385 18.0023L11.5723 23.6389C11.7958 24.2558 11.6856 24.5005 12.3335 24.5005C12.8334 24.5005 13.0552 24.2725 13.3336 24.0005C13.5107 23.8273 14.562 22.8051 15.7359 21.6638L20.7339 25.3565C21.6536 25.8639 22.3177 25.601 22.5467 24.5023L25.8274 9.04205C26.1633 7.69538 25.3141 7.08454 24.4341 7.4839ZM10.4879 17.6578L21.3181 10.8249C21.8588 10.497 22.3545 10.6733 21.9475 11.0346L12.674 19.4016L12.3129 23.2528L10.4879 17.6578Z" fill="white"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[25px] sm:w-[32px]' viewBox="0 0 32 32" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.27539 4.6665C5.38683 4.6665 4.6665 5.38683 4.6665 6.27539V25.7242C4.6665 26.6128 5.38683 27.3331 6.27539 27.3331H25.7243C26.6128 27.3331 27.3332 26.6128 27.3332 25.7242V6.27539C27.3332 5.38683 26.6128 4.6665 25.7243 4.6665H6.27539ZM9.75413 11.7056C10.8401 11.7056 11.7205 10.8253 11.7205 9.73932C11.7205 8.65335 10.8401 7.77299 9.75413 7.77299C8.66816 7.77299 7.7878 8.65335 7.7878 9.73932C7.7878 10.8253 8.66816 11.7056 9.75413 11.7056ZM13.5213 13.1588H16.7801V14.6517C16.7801 14.6517 17.6644 12.883 20.0706 12.883C22.217 12.883 23.995 13.9404 23.995 17.1633V23.9595H20.6179V17.9868C20.6179 16.0856 19.6029 15.8765 18.8295 15.8765C17.2243 15.8765 16.9495 17.2611 16.9495 18.2348V23.9595H13.5213V13.1588ZM11.4682 13.1588H8.04003V23.9595H11.4682V13.1588Z" fill="white"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[25px] sm:w-[32px]' viewBox="0 0 32 32" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 16C4 21.9333 8.33333 26.8667 14 27.8667L14.0669 27.8132C14.0446 27.8088 14.0223 27.8045 14 27.8V19.3333H11V16H14V13.3333C14 10.3333 15.9333 8.66667 18.6667 8.66667C19.5333 8.66667 20.4667 8.8 21.3333 8.93333V12H19.8C18.3333 12 18 12.7333 18 13.6667V16H21.2L20.6667 19.3333H18V27.8C17.9777 27.8045 17.9554 27.8088 17.9331 27.8132L18 27.8667C23.6667 26.8667 28 21.9333 28 16C28 9.4 22.6 4 16 4C9.4 4 4 9.4 4 16Z" fill="white"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[25px] sm:w-[32px]' viewBox="0 0 32 32" fill="none">
                    <path d="M25.241 7.51108C23.5413 6.73122 21.7187 6.15664 19.813 5.82755C19.7784 5.8212 19.7437 5.83707 19.7258 5.86882C19.4914 6.28573 19.2318 6.82962 19.0499 7.25712C17.0003 6.95025 14.9611 6.95025 12.9535 7.25712C12.7717 6.8201 12.5026 6.28573 12.2671 5.86882C12.2493 5.83813 12.2146 5.82226 12.1799 5.82755C10.2753 6.15558 8.45268 6.73016 6.75199 7.51108C6.73727 7.51742 6.72466 7.52801 6.71625 7.54176C3.25916 12.7066 2.31211 17.7445 2.7767 22.7199C2.77881 22.7443 2.79247 22.7675 2.81139 22.7824C5.09229 24.4574 7.30172 25.4743 9.47015 26.1483C9.50484 26.1589 9.54163 26.1462 9.5637 26.1177C10.0766 25.4172 10.5339 24.6786 10.9259 23.9019C10.9491 23.8564 10.927 23.8024 10.8797 23.7844C10.1544 23.5093 9.46385 23.1739 8.79955 22.7929C8.74699 22.7623 8.74279 22.6871 8.79114 22.6511C8.93093 22.5464 9.07073 22.4374 9.20422 22.3274C9.2284 22.3072 9.26203 22.303 9.29041 22.3157C13.6546 24.3082 18.3793 24.3082 22.692 22.3157C22.7204 22.302 22.754 22.3062 22.7793 22.3263C22.9128 22.4363 23.0526 22.5464 23.1934 22.6511C23.2418 22.6871 23.2386 22.7623 23.186 22.7929C22.5217 23.1813 21.8312 23.5093 21.1049 23.7834C21.0576 23.8014 21.0365 23.8564 21.0597 23.9019C21.4601 24.6775 21.9174 25.4161 22.4208 26.1166C22.4419 26.1462 22.4797 26.1589 22.5144 26.1483C24.6933 25.4743 26.9028 24.4574 29.1837 22.7824C29.2036 22.7675 29.2162 22.7453 29.2183 22.721C29.7744 16.9689 28.2871 11.9723 25.2756 7.54282C25.2683 7.52801 25.2557 7.51742 25.241 7.51108ZM11.5776 19.6904C10.2637 19.6904 9.1811 18.4841 9.1811 17.0027C9.1811 15.5213 10.2427 14.315 11.5776 14.315C12.923 14.315 13.9952 15.5319 13.9741 17.0027C13.9741 18.4841 12.9125 19.6904 11.5776 19.6904ZM20.4385 19.6904C19.1246 19.6904 18.0419 18.4841 18.0419 17.0027C18.0419 15.5213 19.1035 14.315 20.4385 14.315C21.7839 14.315 22.856 15.5319 22.835 17.0027C22.835 18.4841 21.7839 19.6904 20.4385 19.6904Z" fill="white"/>
                    </svg>
                    </div>
                </ul>
                
                
            </header>
            <div className='navbarunderimae'>
                <Image className='w-full mt-[10px] sm:mt-[20px]' src={image12} alt='' />
            </div>
        </div>
        </div>
    );
};

export default Footer;