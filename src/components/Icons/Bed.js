import React from 'react';

const BedIcon = ({ height, width }) => {
    return (
        <svg width={width} height={height} className='text-purple-500' fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 11.25H4.5V6.375A1.88 1.88 0 0 1 6.375 4.5h11.25A1.88 1.88 0 0 1 19.5 6.375v4.875H18Z"></path>
            <path d="M2.25 19.5v-5.25a3.009 3.009 0 0 1 3-3h13.5a3.009 3.009 0 0 1 3 3v5.25"></path>
            <path d="M2.25 19.5v-.375A1.128 1.128 0 0 1 3.375 18h17.25a1.128 1.128 0 0 1 1.125 1.125v.375"></path>
            <path d="M5.25 11.25v-.75A1.504 1.504 0 0 1 6.75 9h3.75a1.504 1.504 0 0 1 1.5 1.5v.75"></path>
            <path d="M12 11.25v-.75A1.504 1.504 0 0 1 13.5 9h3.75a1.504 1.504 0 0 1 1.5 1.5v.75"></path>
        </svg>
    )
}

export default BedIcon;