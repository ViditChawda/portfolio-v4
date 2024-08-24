import React from 'react'
import HeroSection from './components/HeroSection'
import Header from './components/Header'

function LandingPage() {
    return (
        <div className='bg-primary'>
            <Header />
            <HeroSection />
            <div className='h-screen bg-white'></div>
        </div>
    )
}

export default LandingPage