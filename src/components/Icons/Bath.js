import React from 'react';

const BathIcon = ({ height, width }) => {
    return (
        <svg width={width} height={height} className='text-purple-500' fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1v0Z"></path>
            <path d="M6 12V5a2 2 0 0 1 2-2h3v2.25"></path>
            <path d="m4 21 1-1.5"></path>
            <path d="m20 21-1-1.5"></path>
        </svg>
    )
}

export default BathIcon;