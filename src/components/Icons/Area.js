import React from 'react';

const AreaIcon = ({ height, width }) => {
    return (
        <svg width={width} height={height} className='text-purple-500' fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"></path>
            <path d="m12 12 8-4.5"></path>
            <path d="M12 12v9"></path>
            <path d="M12 12 4 7.5"></path>
        </svg>
    )
}

export default AreaIcon;