import React from "react";
import Button from "../Button";
import HomeIcon from "../Icons/Home";

const NavbarLg = () => {

    const Register = () => {
        console.log("Register.....");
    }

    return (
        <>
            {/* outer container  */}
            <div className="w-[100%] h-[100px] bg-white flex flex-row p-5 items-center shadow-[0_15px_20px_-15px_rgba(0,0,0,0.3)]">
                {/* logo  */}
                <div className="flex flex-row items-center">
                    <HomeIcon height={'30px'} width={'30px'} />
                    <p className="font-bold text-2xl mx-1 shadow-[2px_2px_2px_rgb(168 85 247)]">Estatery</p>
                </div>

                {/* content  */}
                <div className="flex flex-1 mx-5">
                    <div className="font-bold mx-7">Rent</div>
                    <div className="font-bold mx-7">Buy</div>
                    <div className="font-bold mx-7">Sell</div>
                    <div className="font-bold mx-7">Manage Property</div>
                    <div className="font-bold mx-7">Resources</div>
                </div>

                {/* buttons  */}
                <div className="flex flex-row">
                    <Button height={'60px'} width={'150px'} callback={Register} text={'Login'}
                        bgColor={'bg-purple-100'} textColor={'text-purple-500'} hoverBgColor={'bg-purple-100'}
                    />
                    <Button height={'60px'} width={'150px'} callback={Register} text={'Sign Up'}
                        bgColor={'bg-purple-500'} textColor={'text-purple-100'} hoverBgColor={'bg-purple-100'}
                    />
                </div>

            </div>
        </>
    )
}

export default NavbarLg;