import React from 'react';
import logo from './imgs/Group 952.svg'
import button from './imgs/Frame 870.svg'

const Home = () => {
    return (
        <div className='max-w-[1400px] mx-auto'>
            <nav>
                <div className="flex flex-wrap justify-between py-8">
                    <div className="">
                       <a href=""> <img className='w-30 h-12' src={logo} alt="" /></a>
                    </div>
                    <div className="">
                        <ul className='flex flex-wrap mt-3'>
                            <li className='mx-3'><a href="">Games & Entertainment</a> </li>
                            <li className='mx-3'><a href="">Stress Relief Activities</a> </li>
                            <li className='mx-3'><a href="">Counselling & Therapy</a> </li>
                        </ul>
                    </div>
                    <div className="">
                       <a href=""> <img className='h-12 w-24' src={button} alt="" /></a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Home;