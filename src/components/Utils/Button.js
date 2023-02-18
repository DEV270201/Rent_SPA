import React from "react";

const Button = ({ text, callback, bgColor, textColor, hoverBgColor, hoverTextColor }) => {
    return (
        <>
            <button className={`p-2 text-center ${textColor} ${bgColor} h-[40px] w-[100px] rounded font-semibold m-1`}
                onClick={callback}
            >
                {text}
            </button>
        </>
    )
}

export default Button;