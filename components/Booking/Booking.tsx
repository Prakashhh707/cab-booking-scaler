// import React from 'react'
// import { useState, useEffect } from 'react';

// const Booking: React.FC = () => {
//     const [screenHeight, setScreenHeight] = useState<number>(0);

//     useEffect(() => {
//         if (typeof window !== 'undefined') {
//             setScreenHeight(window.innerHeight * 0.72);

//             const handleResize = () => {
//                 setScreenHeight(window.innerHeight * 0.72);
//             };

//             window.addEventListener('resize', handleResize);

//             return () => {
//                 window.removeEventListener('resize', handleResize);
//             };
//         }
//     }, []);
// import AutocompleteAddress from './AutocompleteAddress';
// import Cars from './Cars';
// function Booking() {
//   const screenHight=window.innerHeight*0.72;
//   return (
//     <div className='p-5'>
//       <h2 className='text-[20px] font-semibold'>Booking</h2>
//       <div className='border-[1px] p-5 rounded-md' style={{height:screenHight}}>
//       <AutocompleteAddress/>
//       <Cars/>
//       </div>
//     </div>
//   )
// }

// export default Booking

import React, { useState, useEffect } from 'react';
import AutocompleteAddress from './AutocompleteAddress';
import Cars from './Cars';
import Cards from './Cards';

const Booking: React.FC = () => {
    const [screenHeight, setScreenHeight] = useState<number>(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setScreenHeight(window.innerHeight * 0.72);

            const handleResize = () => {
                setScreenHeight(window.innerHeight * 0.72);
            };

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    return (
        <div className='p-5'>
            <h2 className='text-[20px] font-semibold'>Booking</h2>
            <div className='border-[1px] p-5 rounded-md' style={{ height: screenHeight }}>
                <AutocompleteAddress />
                <Cars />
                <Cards/>
                <button className='w-full bg-blue-400 p-1 rounded-md mt-4'>Book</button>
            </div>
        </div>
    );
}

export default Booking;
