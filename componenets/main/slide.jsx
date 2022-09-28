import React from 'react';
import slide from '../../public/img/silde.png'
import Image from 'next/image'

const Slide = () => {
    return (
        <>
        <div className="flex container mx-auto flex-col sm:flex-row">
        <div className="flex-1 mx-4 lg:m-8 lg:ml-32">
        <Image src={slide} alt='slide' width={1080} height={540}/>
        
        </div> 
        </div>
        </>
    );
}

export default Slide;
