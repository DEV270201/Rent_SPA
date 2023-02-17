import React from "react";
import HeartIcon from "./Icons/Heart";
import BedIcon from "./Icons/Bed";
import BathIcon from "./Icons/Bath";
import AreaIcon from "./Icons/Area";

const Card = ({ card }) => {
    return (
        <>
            {/* outer container  */}
            <div className="m-2 rounded bg-white flex flex-col shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                {/* image container  */}
                <div className="w-[100%]">
                    <img src={card.imgUrl} alt="home"
                        className="h-[200px] w-[100%]"
                    />
                </div>
                {/* content container  */}
                <div className="w-[100%] my-2 px-4">
                    <div className="flex flex-row justify-between items-center">
                        {/* price */}
                        <p className="text-sm text-gray-500">
                            <span className="font-bold text-lg text-purple-500">{card.rent}</span>/month
                        </p>
                        {/* heart */}
                        <div className="rounded-full h-[30px] w-[30px] flex justify-center items-center border border-gray-300">
                            <HeartIcon height={'20px'} width={'20px'} />
                        </div>
                    </div>
                    <p className="font-bold text-lg">{card.title}</p>
                    <p className="font-light text-gray-500 text-sm">{card.address}</p>
                    <hr className="my-1" />
                    {/* aminities  */}
                    <div className="w-[100%] flex flex-row items-center justify-between">
                        {/* aminity 1  */}
                        <div className="flex flex-row items-center">
                            <BedIcon height={'15px'} width={'15px'} />
                            <p className="text-gray-500 text-xs mx-1">{card.beds} {card.beds > 1 ? 'Beds' : 'Bed'}</p>
                        </div>
                        {/* aminity 2  */}
                        <div className="flex flex-row items-center">
                            <BathIcon height={'15px'} width={'15px'} />
                            <p className="text-gray-500 text-xs mx-1">{card.washroom} {card.washroom > 1 ? 'Bathrooms' : 'Bathroom'}</p>
                        </div>
                        {/* aminity 3  */}
                        <div className="flex flex-row">
                            <AreaIcon height={'15px'} width={'15px'} />
                            <p className="text-gray-500 text-xs mx-1">{card.area}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;