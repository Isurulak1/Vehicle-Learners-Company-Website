import React, { useEffect, useState } from 'react'

const About = () => {

    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrolltop = window.scrollY;
            if (scrolltop > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className={`bg-gradient-to-r from-red-600 to-yellow-500 transition-opacity duration-700  ${isVisible ? 'opacity-0 scale-100' : 'opacity-100 scale-100'}`}>
                <h1 className='text-4xl font-extrabold  text-center  text-white p-6 animate-pulse'>"දක්ෂ රියදුරෙකු බිහි කිරීම, අපගේ පරමාදර්ශයයි."</h1>
            </div>
            <div>
                
            </div>
        </div>

    )
}

export default About