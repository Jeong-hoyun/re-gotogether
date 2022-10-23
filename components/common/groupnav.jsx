import Image from 'next/image';
import React from 'react';


const Groupnav = () => {
    return (
        <div className='relative'>
            <Image src={img}  alt={"/img/groupImg.png"} />
            <h2 className="absolute z-3 text-white left-5 top-px lg:left-40 lg:top-20 lg:text-2xl sm:text-xl">
            좋은 여행으로 </h2>          
            <h2 className="absolute z-3 text-white left-5 top-px lg:left-20 lg:top-10 lg:text-2xl sm:text-xl">누구랑 가는지에 따라,</h2>
       </div>
    );
}




export default Groupnav;
