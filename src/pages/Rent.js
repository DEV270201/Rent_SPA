import React, { useState } from "react";
import Card from "../components/Utils/Card";
import Data from "../assets/Data";
import Button from "../components/Utils/Button";
import OopsIcon from "../components/Icons/Oops";
import Dropdown from "../components/Utils/Dropdown";

const Rent = () => {

    const [filter, setFilters] = useState({
        location: "New York",
        date: "2023-02-19",
        price: "$1001-$2000",
        type: "Villa"
    });
    let lowerRange, upperRange;

    // creating a copy for filtering cards. Do not mutate the original one.
    const results = Data.filter((item) => {
        // getting the price boundaries 
        [lowerRange, upperRange] = filter.price.split("-");
        lowerRange = lowerRange.slice(1,);
        upperRange = upperRange.slice(1,);
        //filtering out cards based on the selected filters
        if (
            filter.location === item.location &&
            filter.type === item.type &&
            Number(lowerRange) <= Number(item.price.slice(1,)) &&
            Number(item.price.slice(1,)) <= Number(upperRange) &&
            (
                + new Date(item.date) === + new Date(filter.date)
            )
        ) {
            return true;
        }
        return false;
    })

    //updating the filter
    const updateFilter = (name, value) => {
        setFilters((prevValue) => {
            return {
                ...prevValue, [name]: value
            }
        })
    }

    const Hello = () => {
        console.log("Hello, search!");
    }

    return (
        <>
            {/* outer container  */}
            <div className="w-[100%] flex justify-center">
                <div className="w-[95%] py-8 xs:px-8 md:px-12 flex flex-col">
                    {/* container 1  */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <p className="xs:text-sm md:text-md lg:text-lg  xl:text-3xl font-bold">Search properties to rent</p>
                        <div className="w-[215px] rounded border border-purple-100 py-1 my-2 md:my-0">
                            <Dropdown
                                options={['Search', 'Search', 'Search']}
                                name={'search'}
                                val={'Search with Search Bar'}
                                callback={Hello}
                            />
                        </div>
                    </div>

                    {/* filters container  */}
                    <div className="my-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {/* location  */}
                        <div className="flex flex-col justify-start shadow-[2px_15px_20px_-15px_rgba(0,0,0,0.3)] p-1">
                            <p className="text-xs text-gray-500 font-bold">Location</p>
                            <Dropdown options={['California', 'Florida', 'New York']}
                                name={'location'}
                                val={filter.location}
                                callback={updateFilter}
                            />
                        </div>
                        {/* Date  */}
                        <div className="flex flex-col justify-start shadow-[2px_15px_20px_-15px_rgba(0,0,0,0.3)] p-1">
                            <p className="text-xs text-gray-500 font-bold">When</p>
                            <div className="font-bold">
                                <input type="date" className="w-[100%]" min={"2023-02-19"} max={"2023-02-20"}
                                    onChange={(e) => updateFilter("date", e.target.value)}
                                    value={filter.date}
                                />
                            </div>  
                        </div>
                        {/* Price  */}
                        <div className="flex flex-col justify-start shadow-[2px_15px_20px_-15px_rgba(0,0,0,0.3)] p-1">
                            <p className="text-xs text-gray-500 font-bold">Price</p>
                            <Dropdown options={['$0-$1000', '$1001-$2000', '$2001-$3000', '$3001-$4000']}
                                name={'price'}
                                val={filter.price}
                                callback={updateFilter}
                            />
                        </div>
                        {/* Type  */}
                        <div className="flex flex-col justify-start shadow-[2px_15px_20px_-15px_rgba(0,0,0,0.3)] p-1">
                            <p className="text-xs text-gray-500 font-bold">Property Type</p>
                            <Dropdown options={['Modern', 'Villa', 'Simple']}
                                name={'type'}
                                val={filter.type}
                                callback={updateFilter}
                            />
                        </div>
                        {/* no need of this button since the state is changed directly via the dropdown. This is just for UI  */}
                        <Button height={'60px'} width={'150px'} callback={Hello} text={'Hello'}
                            bgColor={'bg-purple-500'} textColor={'text-purple-100'} hoverBgColor={'bg-purple-100'}
                        />
                    </div>

                    {/* cards container  */}
                    <div>
                        {
                            results.length !== 0 ?
                                <div className="my-4 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                                    {
                                        results.map((card) => {
                                return (
                                    <div key={card.id}
                                    >
                                        <Card card={card} />
                                    </div>
                                )
                            })
                                    }
                                </div>
                                :
                                <div className="my-3 flex flex-row items-center w-[100%]">
                                    <OopsIcon height={'30px'} width={'30px'} />
                                    <p className="font-semibold text-md mx-2">Sorry, no results matched your filters..</p>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rent;