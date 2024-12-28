"use client";

import React , { useRef, useState } from 'react';
import Image from 'next/image';
import image5 from '../components/image/image5.png';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { Keyboard, Scrollbar, Navigation,  } from 'swiper/modules';



const Pagetwo = () => {
    return (
        <div>
            <div className='container mx-auto pt-[60px] md:pt-[70px] lg:pt-[90px] xl:pt-[120px] 2xl:pt-[150px] pb-[50px] md:pb-[60px] lg:pb-[80px] xl:pb-[100px] 2xl:pb-[113px]'>
                <div className=''>
                    <div className='flex flex-col'>
                    
                    <div className='flex gap-[40px]'>
                    <Swiper
                        slidesPerView={1}
                        centeredSlides={false}
                        slidesPerGroupSkip={1}
                        grabCursor={true}
                        keyboard={{
                        enabled: true,
                        }}
                        breakpoints={{
                            640: {
                              slidesPerView: 1,
                              spaceBetween: 20,
                            },
                            768: {
                              slidesPerView: 1,
                              spaceBetween: 30,
                            },
                            1024: {
                              slidesPerView: 1.2,
                              spaceBetween: 40,
                            },
                          }}
                          scrollbar={{
                            hide: false,
                            draggable: true,
                            el: '.swiper-scrollbar', // Apply custom scrollbar styles
                          }}
                        navigation={{
                            nextEl: ".button-next-slide",
                            prevEl: ".button-prev-slide"
                          }}
                          
                        modules={[Keyboard, Scrollbar, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                        <div className='tradingbotslider flex items-center relative overflow-hidden flex-col sm:flex-row gap-[25px] sm:gap-0'>
                        <svg className='absolute left-0 top-0' width="368" height="386" viewBox="0 0 368 386" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_213_291)">
<ellipse cx="70.3333" cy="99.6245" rx="22.4033" ry="270.445" transform="rotate(-46.7494 70.3333 99.6245)" fill="#1FFFA9" fillOpacity="0.5"/>
</g>
<g filter="url(#filter1_f_213_291)">
<ellipse cx="0.33326" cy="-101.375" rx="22.4033" ry="270.445" transform="rotate(-46.7494 0.33326 -101.375)" fill="#1FFFA9" fillOpacity="0.5"/>
</g>
<g filter="url(#filter2_f_213_291)">
<ellipse cx="-93.6667" cy="67.6245" rx="22.4033" ry="270.445" transform="rotate(-46.7494 -93.6667 67.6245)" fill="#1FFFA9" fillOpacity="0.5"/>
</g>
<defs>
<filter id="filter0_f_213_291" x="-227.256" y="-186.411" width="595.179" height="572.07" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_213_291"/>
</filter>
<filter id="filter1_f_213_291" x="-265.256" y="-355.41" width="531.179" height="508.07" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="34" result="effect1_foregroundBlur_213_291"/>
</filter>
<filter id="filter2_f_213_291" x="-359.256" y="-186.411" width="531.179" height="508.07" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="34" result="effect1_foregroundBlur_213_291"/>
</filter>
</defs>
                        </svg>
                            <div className='flex-1'>
                                <h2 className='fastersecure !text-left'>Trading Bots For Any Market Condition</h2>
                                <div className='flex gap-[10px] mt-[24px] h-fit'>
                                <ul>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='2xl:block hidden' width="34" height="148" viewBox="0 0 34 148" fill="none">
                                    <g filter="url(#filter0_f_213_281)">
                                        <circle cx="17" cy="17" r="6" fill="#1FFFA9"/>
                                    </g>
                                    <circle cx="17" cy="17" r="8" fill="#1FFFA9"/>
                                    <g filter="url(#filter1_f_213_281)">
                                        <circle cx="17" cy="73" r="6" fill="#1FFFA9"/>
                                    </g>
                                    <circle cx="17" cy="73" r="8" fill="#1FFFA9"/>
                                    <g filter="url(#filter2_f_213_281)">
                                        <circle cx="17" cy="131" r="6" fill="#1FFFA9"/>
                                    </g>
                                    <circle cx="17" cy="131" r="8" fill="#1FFFA9"/>
                                    <line x1="17.5" y1="24" x2="17.5" y2="66" stroke="#1FFFA9" strokeOpacity="0.3"/>
                                    <line x1="17.5" y1="81" x2="17.5" y2="123" stroke="#1FFFA9" strokeOpacity="0.3"/>
                                    <defs>
                                        <filter id="filter0_f_213_281" x="0" y="0" width="34" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                        <feGaussianBlur stdDeviation="5.5" result="effect1_foregroundBlur_213_281"/>
                                        </filter>
                                        <filter id="filter1_f_213_281" x="0" y="56" width="34" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                        <feGaussianBlur stdDeviation="5.5" result="effect1_foregroundBlur_213_281"/>
                                        </filter>
                                        <filter id="filter2_f_213_281" x="0" y="114" width="34" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                        <feGaussianBlur stdDeviation="5.5" result="effect1_foregroundBlur_213_281"/>
                                        </filter>
                                    </defs>
                                    </svg>
                                </ul>
                                <ul className='flex flex-col gap-[15px] sm:gap-[20px] lg:gap-[25px] items-start'>
                                    <li className='tradefaster text-left'>Run pre-built bot strategies with just a few clicks.</li>
                                    <li className='tradefaster text-left'>Automate trades across all your favourite exchanges.</li>
                                    <li className='tradefaster text-left'>Try the future of trading automation with Cody AI.</li>
                                </ul>
                                </div>
                                <div className='flex justify-left gap-[16px] sm:gap-[18px] lg:gap-[24px] mt-[25px] lg:mt-[30px] xl:mt-[35px] 2xl:mt-[40px]'>
                                    <button className=' bntclasdfasfnaefl gap-[8px] sm:gap-[12px] lg:gap-[16px]'>Learn More <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M8.75 2.625L13.125 7L8.75 11.375" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M0.875 7H13.125" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg></button>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <Image className='w-full' src={image5} alt=''/>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='tradingbotslider flex items-center relative overflow-hidden flex-col sm:flex-row gap-[25px] sm:gap-0'>
                        <svg className='absolute left-0 top-0' width="368" height="386" viewBox="0 0 368 386" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_213_291)">
<ellipse cx="70.3333" cy="99.6245" rx="22.4033" ry="270.445" transform="rotate(-46.7494 70.3333 99.6245)" fill="#1FFFA9" fillOpacity="0.5"/>
</g>
<g filter="url(#filter1_f_213_291)">
<ellipse cx="0.33326" cy="-101.375" rx="22.4033" ry="270.445" transform="rotate(-46.7494 0.33326 -101.375)" fill="#1FFFA9" fillOpacity="0.5"/>
</g>
<g filter="url(#filter2_f_213_291)">
<ellipse cx="-93.6667" cy="67.6245" rx="22.4033" ry="270.445" transform="rotate(-46.7494 -93.6667 67.6245)" fill="#1FFFA9" fillOpacity="0.5"/>
</g>
<defs>
<filter id="filter0_f_213_291" x="-227.256" y="-186.411" width="595.179" height="572.07" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_213_291"/>
</filter>
<filter id="filter1_f_213_291" x="-265.256" y="-355.41" width="531.179" height="508.07" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="34" result="effect1_foregroundBlur_213_291"/>
</filter>
<filter id="filter2_f_213_291" x="-359.256" y="-186.411" width="531.179" height="508.07" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="34" result="effect1_foregroundBlur_213_291"/>
</filter>
</defs>
                        </svg>

                            <div className='flex-1'>
                                <h2 className='fastersecure !text-left'>Trading Bots For Any Market Condition</h2>
                                <div className='flex gap-[10px] mt-[24px] h-fit'>
                                <ul>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='2xl:block hidden' width="34" height="148" viewBox="0 0 34 148" fill="none">
                                    <g filter="url(#filter0_f_213_281)">
                                        <circle cx="17" cy="17" r="6" fill="#1FFFA9"/>
                                    </g>
                                    <circle cx="17" cy="17" r="8" fill="#1FFFA9"/>
                                    <g filter="url(#filter1_f_213_281)">
                                        <circle cx="17" cy="73" r="6" fill="#1FFFA9"/>
                                    </g>
                                    <circle cx="17" cy="73" r="8" fill="#1FFFA9"/>
                                    <g filter="url(#filter2_f_213_281)">
                                        <circle cx="17" cy="131" r="6" fill="#1FFFA9"/>
                                    </g>
                                    <circle cx="17" cy="131" r="8" fill="#1FFFA9"/>
                                    <line x1="17.5" y1="24" x2="17.5" y2="66" stroke="#1FFFA9" strokeOpacity="0.3"/>
                                    <line x1="17.5" y1="81" x2="17.5" y2="123" stroke="#1FFFA9" strokeOpacity="0.3"/>
                                    <defs>
                                        <filter id="filter0_f_213_281" x="0" y="0" width="34" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                        <feGaussianBlur stdDeviation="5.5" result="effect1_foregroundBlur_213_281"/>
                                        </filter>
                                        <filter id="filter1_f_213_281" x="0" y="56" width="34" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                        <feGaussianBlur stdDeviation="5.5" result="effect1_foregroundBlur_213_281"/>
                                        </filter>
                                        <filter id="filter2_f_213_281" x="0" y="114" width="34" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                        <feGaussianBlur stdDeviation="5.5" result="effect1_foregroundBlur_213_281"/>
                                        </filter>
                                    </defs>
                                    </svg>
                                </ul>
                                <ul className='flex flex-col gap-[15px] sm:gap-[20px] lg:gap-[25px] items-start'>
                                    <li className='tradefaster text-left'>Run pre-built bot strategies with just a few clicks.</li>
                                    <li className='tradefaster text-left'>Automate trades across all your favourite exchanges.</li>
                                    <li className='tradefaster text-left'>Try the future of trading automation with Cody AI.</li>
                                </ul>
                                </div>
                                <div className='flex justify-left gap-[16px] sm:gap-[18px] lg:gap-[24px] mt-[25px] lg:mt-[30px] xl:mt-[35px] 2xl:mt-[40px]'>
                                    <button className=' bntclasdfasfnaefl gap-[8px] sm:gap-[12px] lg:gap-[16px]'>Learn More <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M8.75 2.625L13.125 7L8.75 11.375" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M0.875 7H13.125" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg></button>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <Image className='w-full' src={image5} alt=''/>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='tradingbotslider flex items-center relative overflow-hidden flex-col sm:flex-row gap-[25px] sm:gap-0'>
                        <svg className='absolute left-0 top-0' width="368" height="386" viewBox="0 0 368 386" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_213_291)">
<ellipse cx="70.3333" cy="99.6245" rx="22.4033" ry="270.445" transform="rotate(-46.7494 70.3333 99.6245)" fill="#1FFFA9" fillOpacity="0.5"/>
</g>
<g filter="url(#filter1_f_213_291)">
<ellipse cx="0.33326" cy="-101.375" rx="22.4033" ry="270.445" transform="rotate(-46.7494 0.33326 -101.375)" fill="#1FFFA9" fillOpacity="0.5"/>
</g>
<g filter="url(#filter2_f_213_291)">
<ellipse cx="-93.6667" cy="67.6245" rx="22.4033" ry="270.445" transform="rotate(-46.7494 -93.6667 67.6245)" fill="#1FFFA9" fillOpacity="0.5"/>
</g>
<defs>
<filter id="filter0_f_213_291" x="-227.256" y="-186.411" width="595.179" height="572.07" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_213_291"/>
</filter>
<filter id="filter1_f_213_291" x="-265.256" y="-355.41" width="531.179" height="508.07" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="34" result="effect1_foregroundBlur_213_291"/>
</filter>
<filter id="filter2_f_213_291" x="-359.256" y="-186.411" width="531.179" height="508.07" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="34" result="effect1_foregroundBlur_213_291"/>
</filter>
</defs>
                        </svg>

                            <div className='flex-1'>
                                <h2 className='fastersecure !text-left'>Trading Bots For Any Market Condition</h2>
                                <div className='flex gap-[10px] mt-[24px] h-fit'>
                                <ul>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='2xl:block hidden' width="34" height="148" viewBox="0 0 34 148" fill="none">
                                    <g filter="url(#filter0_f_213_281)">
                                        <circle cx="17" cy="17" r="6" fill="#1FFFA9"/>
                                    </g>
                                    <circle cx="17" cy="17" r="8" fill="#1FFFA9"/>
                                    <g filter="url(#filter1_f_213_281)">
                                        <circle cx="17" cy="73" r="6" fill="#1FFFA9"/>
                                    </g>
                                    <circle cx="17" cy="73" r="8" fill="#1FFFA9"/>
                                    <g filter="url(#filter2_f_213_281)">
                                        <circle cx="17" cy="131" r="6" fill="#1FFFA9"/>
                                    </g>
                                    <circle cx="17" cy="131" r="8" fill="#1FFFA9"/>
                                    <line x1="17.5" y1="24" x2="17.5" y2="66" stroke="#1FFFA9" strokeOpacity="0.3"/>
                                    <line x1="17.5" y1="81" x2="17.5" y2="123" stroke="#1FFFA9" strokeOpacity="0.3"/>
                                    <defs>
                                        <filter id="filter0_f_213_281" x="0" y="0" width="34" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                        <feGaussianBlur stdDeviation="5.5" result="effect1_foregroundBlur_213_281"/>
                                        </filter>
                                        <filter id="filter1_f_213_281" x="0" y="56" width="34" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                        <feGaussianBlur stdDeviation="5.5" result="effect1_foregroundBlur_213_281"/>
                                        </filter>
                                        <filter id="filter2_f_213_281" x="0" y="114" width="34" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                        <feGaussianBlur stdDeviation="5.5" result="effect1_foregroundBlur_213_281"/>
                                        </filter>
                                    </defs>
                                    </svg>
                                </ul>
                                <ul className='flex flex-col gap-[15px] sm:gap-[20px] lg:gap-[25px] items-start'>
                                    <li className='tradefaster text-left'>Run pre-built bot strategies with just a few clicks.</li>
                                    <li className='tradefaster text-left'>Automate trades across all your favourite exchanges.</li>
                                    <li className='tradefaster text-left'>Try the future of trading automation with Cody AI.</li>
                                </ul>
                                </div>
                                <div className='flex justify-left gap-[16px] sm:gap-[18px] lg:gap-[24px] mt-[25px] lg:mt-[30px] xl:mt-[35px] 2xl:mt-[40px]'>
                                    <button className=' bntclasdfasfnaefl gap-[8px] sm:gap-[12px] lg:gap-[16px]'>Learn More <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M8.75 2.625L13.125 7L8.75 11.375" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M0.875 7H13.125" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg></button>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <Image className='w-full' src={image5} alt=''/>
                            </div>
                        </div>
                        </SwiperSlide>
                        </Swiper>
                        </div>
                        <div className='flex justify-between items-center sm:px-[0] px-[24px] mt-[30px] md:mt-[50px] xl:mt-[84px] relative' >
                        <div className='flex gap-[15px] sm:gap-[16px] lg:gap-[20px] 2xl:gap-[24px] '>
                            <button className='button-next-slide w-[50px] md:w-[70px] xl:w-[90px] h-[50px] md:h-[70px] xl:h-[90px] flex justify-center items-center background hover:!bg-[#1FFFA9]  group'>
                                <svg className='button-next-slide group-hover:stroke-[#0A0D0C] stroke-[#fff] stoke-[1px]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.57 5.92999L3.5 12L9.57 18.07" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M20.4999 12H3.66992" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                            <button className='button-prev-slide w-[50px] md:w-[70px] xl:w-[90px] h-[50px] md:h-[70px] xl:h-[90px] flex justify-center items-center background hover:!bg-[#1FFFA9]  group'>
                                <svg className='button-prev-slide group-hover:stroke-[#0A0D0C] stroke-[#fff] stoke-[1px]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.43 5.92999L20.5 12L14.43 18.07" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3.50008 12H20.3301" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <div className="swiper-scrollbar absolute bottom-[50%] right-0 !w-[174px] !z-10 h-2 !bg-[#fff]rounded-full transition-y-[-50%]">
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagetwo;