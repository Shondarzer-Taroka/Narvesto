'use client'
import React from 'react';
import CountUp from 'react-countup';


interface countDown {
    count:number
}


const Count:React.FC<countDown> = ({count}) => {
    return (
        <div>
            <CountUp end={count} />
        </div>
    );
};

export default Count;