/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Spot from "./Spot/Spot";
import UseTitle from "../../Title/UseTitle";

const AllTourist = () => {
    UseTitle("LandDetails");
    const allTourist = useLoaderData();
    const [tourists, setTourists] = useState(allTourist);
    
    return (
        <div className="mx-20">
            {/* <h1 className="text-6xl text-center text-purple-600">Hot Hot Cold Coffee: {tourists.length}</h1> */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tourists.map(tourist => (
                    <Spot
                        key={tourist._id}
                        tourist={tourist}
                        tourists={tourists}
                        setTourists={setTourists}
                    > </Spot>
                ))}
            </div>
        </div>
    );
};

export default AllTourist;
