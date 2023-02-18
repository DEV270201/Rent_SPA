import React, { useState } from "react";
import Card from "../components/Utils/Card";
import Data from "../assets/Data";
import Button from "../components/Utils/Button";
import Dropdown from "../components/Utils/Dropdown";

const Rent = () => {

    const [filter, setFilters] = useState({
        location: "None",
        date: "",
        price: "None",
        type: "None"
    });

    //updating the filter
    const updateFilter = (name, value) => {
        setFilters((prevValue) => {
            return {
                ...prevValue, [name]: value
            }
        })
    }

    return (
        <>
            {/* outer container  */}
            <div className="w-[100%] flex justify-center">
                <div className="w-[95%] py-8 px-12 flex flex-col">
                    {/* container 1  */}
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-3xl font-bold">Search properties to rent</p>
                    </div>

                    {/* filters container  */}
                    <div className="my-6 grid grid-cols-5 gap-6">
                        {/* location  */}
                        <div className="flex flex-col justify-start">
                            <p className="text-xs text-gray-500 font-bold">Location</p>
                            <Dropdown options={['None', 'California', 'Florida', 'Indiana', 'New York', 'Texas']}
                                name={'location'}
                                val={filter.location}
                                callback={updateFilter}
                            />
                        </div>
                        {/* Date  */}
                        <div className="flex flex-col justify-start">
                            <p className="text-xs text-gray-500 font-bold">When</p>
                        </div>
                        {/* Price  */}
                        <div className="flex flex-col justify-start">
                            <p className="text-xs text-gray-500 font-bold">Price</p>
                            <Dropdown options={['None', '$0-$1000', '$1001-$2000', '$2001-$3000', '$3001-$4000']}
                                name={'price'}
                                val={filter.price}
                                callback={updateFilter}
                            />
                        </div>
                        {/* Type  */}
                        <div className="flex flex-col justify-start">
                            <p className="text-xs text-gray-500 font-bold">Property Type</p>
                            <Dropdown options={['None', 'Modern', 'Villa', 'Simple']}
                                name={'type'}
                                val={filter.type}
                                callback={updateFilter}
                            />
                        </div>
                        <Button height={'60px'} width={'150px'} callback={""} text={'Search'}
                            bgColor={'bg-purple-500'} textColor={'text-purple-100'} hoverBgColor={'bg-purple-100'}
                        />
                    </div>

                    {/* cards container  */}
                    <div className="my-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                        {
                            Data.map((card) => {
                                return (
                                    <div key={card.id}>
                                        <Card card={card} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rent;