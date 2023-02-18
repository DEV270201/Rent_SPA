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
                <p className='text-sm font-bold text-black'>{val}</p>
                <ChevronDownIcon height={'10px'} width={'10px'} />
                {/* content  */}
                <div className='w-[100%] absolute flex flex-col top-3 left-0 my-3 items-start z-50 shadow-[10px_15px_20px_-15px_rgba(0,0,0,0.3)] content bg-white'>
                    {
                        options.map((item, index) => {
                            return (
                                <div className={`p-1 hover:bg-purple-500 w-[100%] item ${item === val ? 'bg-purple-500 text-white' : 'bg-white'}`} key={index} onClick={getVal}>{item}</div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Dropdown;