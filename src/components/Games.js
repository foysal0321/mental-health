import React from 'react';
import tom1 from './imgs/Group 921.svg'
import tom2 from './imgs/Group 922.svg'
import tom3 from './imgs/Group 923.svg'
import tom4 from './imgs/Group 960.svg'

const Games = () => {
    return (
        <div className='max-w-[1400px] mx-auto py-12'>
            <h3 className='text-2xl font-bold py-3'>Games & Entertainment</h3>
            <div className=" flex flex-wrap justify-between">
                <img className='w-[320px]' src={tom2} alt="" />
                 <img className='w-[320px]' src={tom3} alt="" />
                <img className='w-[320px]' src={tom1} alt="" />              
                <img className='w-[320px]' src={tom4} alt="" />
            </div>
        </div>
    );
};

export default Games;