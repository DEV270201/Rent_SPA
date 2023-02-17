import React from "react";
import Card from "../components/Card";
import Data from "../assets/Data";

const Rent = () => {
    return (
        <>
            {/* outer container  */}
            <div className="w-[100%] flex justify-center">
                <div className="w-[95%] py-8 px-12 flex flex-col">
                    {/* container 1  */}
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-3xl font-bold">Search properties to rent</p>
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