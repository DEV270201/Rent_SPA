// Built my custom dropdown 
import React from 'react';
import ChevronDownIcon from '../Icons/ChevronDown';
import "../../Css/Dropdown.css";

const Dropdown = ({ options, name, val, callback }) => {
    const getVal = (e) => {
        callback(name, e.target.innerHTML);
    }

    return (
        <>
            <div className={`flex flex-row justify-between items-center w-[100%] relative p-1 dropdown `}>
                <p className='text-md font-bold text-black'>{val}</p>
                <div className='h-[17px] w-[17px] rounded-full bg-purple-200 flex items-center justify-center'>
                    <ChevronDownIcon height={'15px'} width={'15px'} />
                </div>
                {/* content  */}
                <div className='w-[100%] absolute flex flex-col top-3 left-0 my-3 items-start z-50 shadow-[10px_15px_20px_-15px_rgba(0,0,0,0.3)] content bg-white'>
                    {
                        options.map((item, index) => {
                            return (
                                <div className={`p-1 w-[100%] item ${item === val ? ' hover:bg-purple-500 bg-purple-500 text-white' : 'bg-white hover:bg-gray-400'}`} key={index} onClick={getVal}>{item}</div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Dropdown;