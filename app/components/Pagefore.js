import Image from 'next/image';
import React from 'react';
import image7 from '../components/image/image7.png';
import image8 from '../components/image/image8.png';

const Pagefore = () => {
    return (
        <div className='relative backgroundroadmap'>
            <svg className="absolute top-0 left-[20%] z-0 w-[80%]" viewBox="0 0 1161 1134" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_1_8355)">
<ellipse cx="580.5" cy="474.5" rx="80.5" ry="159.5" fill="#1FFFA9"/>
</g>
<defs>
<filter id="filter0_f_1_8355" x="0" y="-185" width="1161" height="1319" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_1_8355"/>
</filter>
</defs>
</svg>

            <div className=' mx-auto py-[60px] md:py-[70px] lg:py-[90px] xl:py-[120px] 2xl:py-[150px] px-[24px] sm:px-[0px]'>
            <div className='flex justify-center  items-center flex-col gap-[16px] sm:gap-[18px] lg:gap-[24px] mb-[30px] lg:mb-[40px] xl:mb-[60px] 2xl:mb-[80px]'>
                    <button className='tradingbotsbtn'>Roadmap</button>
                    <h2 className='fastersecure text-center'>MVP Development Roadmap</h2>
                    <p className='text-center tradefaster'>Establish a functional prototype that allows GPU owners to offer their computing<br className='hidden sm:block'/> power and users to execute tasks using available GPU resources.</p>
                </div>
                <div className=''>
                    <div className='flex justify-start items-start h-full  gap-[24px] lg:gap-[32px] relative'>
                    <Image className='absolute left-0 top-0 z-[-1] hidden lg:block' src={image8} alt=""/>
                        <div className='flex justify-start flex-col h-full flex-1 gap-[60px] sm:gap-[138px] 2xl:gap-[138px]' >
                            <div className='flex justify-end items-end flex-col'>
                                <p className="roadmapphore">Phase 1</p>
                                <p className='intitialmvp'>Initial MVP Setup</p>
                            </div>
                            <div className='flex justify-end items-end flex-col'>
                                <p className="roadmapphore">Phase 2</p>
                                <p className='intitialmvp'>Scale and Decentralize</p>
                            </div>
                            <div className='flex justify-end items-end flex-col'>
                                <p className="roadmapphore">Phase 3</p>
                                <p className='intitialmvp'>Advanced GPU Integration</p>
                            </div>
                        </div>
                        
                        <div className='flex justify-start flex-row h-full flex-1 gap-[24px] lg:gap-[32px]'>
                        <div className=''>
                            <Image className='h-[90%] sm:h-[80%] block' src={image7} alt=""/>
                        </div>
                            <div className='flex justify-between flex-col h-full gap-[20px] sm:gap-[64px]'>
                            <div className="">
                                <h3 className="pythonprogram">Client-Side Python Program (CLI)</h3>
                                <p className="Purpose">Purpose:</p>
                                <p className='gpuenables'>Enables GPU owners to register their devices with the central <br/> server and listen for incoming tasks.</p>
                            </div>
                            <div className="">
                                <h3 className="pythonprogram">Central Server</h3>
                                <p className="Purpose">Technology:</p>
                                <p className='gpuenables'>Enables GPU owners to register their devices with the central <br/> server and listen for incoming tasks.</p>
                            </div>
                            <div className="">
                                <h3 className="pythonprogram">Data Management with AWS S3</h3>
                                <p className="Purpose">Implementation:</p>
                                <p className='gpuenables'>Generate and manage S3 access <br className='block sm:hidden'/> keys to allow users direct<br className='block sm:hidden'/> access to <br className='hidden sm:block'/> upload and download<br className='block sm:hidden'/> data, reducing load on the central server.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagefore;