import React from 'react';
import Pageone from './Pageone';
import Pagetwo from './Pagetwo';
import Pagethree from './Pagethree';
import Pagefore from './Pagefore';
import Pagefive from './Pagefive';

const Body = () => {
    return (
        <div>
            <Pageone/>
            <Pagetwo/>
            <Pagethree/>
            <Pagefore className='bg-[#010302]'/>
            <Pagefive/>
        </div>
    );
};

export default Body;