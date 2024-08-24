import React, { useEffect, useRef } from 'react'
import { HeroImage } from '@/assets/images'
import NameMarquee from '@/components/custom/NameMarque'
import { ArrowDownRight, Globe } from 'lucide-react'
import { gsap } from 'gsap'

const items = [
    {
        title: "Vidit",
        image: "jskdfa"
    },
    {
        title: "Chawda",
        image: "jskdfa"
    },
]

function HeroSection() {
    const globeRef = useRef(null);
    const globeRef1 = useRef(null);

    useEffect(() => {
        gsap.to(globeRef.current, {
            rotation: 360,
            repeat: -1,
            ease: "linear",
            duration: 3,
        });
    }, []);

    useEffect(() => {
        gsap.to(globeRef1.current, {
            rotation: 360,
            repeat: -1,
            ease: "linear",
            duration: 3,
        });
    }, []);

    return (
        <div className='md:max-h-screen min-h-[700px] relative -mt-16 md:-mt-24 text-4xl font-bold'>
            <img src={HeroImage} alt="" className='md:h-[650px] z-0 md:z-50 object-cover bottom-0 -mt-[100px] mx-auto absolute 2xl:right-[530px]' />
            <NameMarquee
                className='absolute bottom-20 md:bottom-0'
                items={items}
                direction='left'
                speed='normal' />
            <div className='md:block hidden'>
                <div className='absolute top-40 right-28 flex flex-col gap-16'>
                    <ArrowDownRight size={40} color='white' />
                    <p className='font-light'>
                        Web <br />
                        Frontend & backend <br />
                        Developer
                    </p>
                </div>
            </div>

            <div className='md:block hidden'>
                <div className='h-28  bg-[#1D1C20] text-base flex relative items-center px-10 font-medium w-60 rounded-r-full top-72'>
                    Located <br />
                    in <br />
                    India <br />
                    <div
                        className='h-20 w-20 bg-[#999C9F] rounded-full right-4 flex items-center justify-center absolute'
                        ref={globeRef}
                    >
                        <Globe className='spin-slow' color="#ffffff" strokeWidth={1} size={45} />
                    </div>
                </div>
            </div>
            <div className='flex flex-row w-full md:hidden'>
                <div className='absolute text-2xl container bottom-2 flex flex-col'>
                    <ArrowDownRight size={40} color='white' />
                    <p className='font-normal'>
                        Web <br />
                        Frontend & backend <br />
                        Developer
                    </p>
                </div>
                <div>
                    <div
                        className='h-20 w-20 bg-[#999C9F] rounded-full bottom-2 right-2 flex items-center justify-center absolute'
                        ref={globeRef1}
                    >
                        <Globe className='spin-slow' color="#ffffff" strokeWidth={1} size={45} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
