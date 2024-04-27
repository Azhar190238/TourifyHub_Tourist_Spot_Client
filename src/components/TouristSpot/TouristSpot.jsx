import { useLoaderData } from "react-router-dom";
import UseTitle from "../../Title/UseTitle";
import { useState } from "react";
import Spot from "../AllSpot/Spot/Spot";


const TouristSpot = () => {
    UseTitle("AllTourist");
    const allTourist = useLoaderData();
    const [tourists, setTourists] = useState(allTourist);
    
    // Slice the first 8 elements from the tourists array
    const first8Tourists = tourists.slice(0, 6);

    return (
        <div className="mx-20">
            {/* <h1 className="text-6xl text-center text-purple-600">Hot Hot Cold Coffee: {first8Tourists.length}</h1> */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {first8Tourists.map(tourist => (
                    <Spot 
                    key={tourist._id}
                    tourist={tourist}
                    tourists={tourists}
                    setTourists={setTourists}>

                    </Spot>
  
                ))}
            </div>
        </div>
    );
};

export default TouristSpot;


// import { useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import Spot from "./Spot/Spot";
// import UseTitle from "../../Title/UseTitle";

// const AllTourist = () => {
//     UseTitle("AllTourist");
//     const allTourist = useLoaderData();
//     const [tourists, setTourists] = useState(allTourist);
    
//     // Slice the first 8 elements from the tourists array
//     const first8Tourists = tourists.slice(0, 7);

//     return (
//         <div className="mx-20">
//             {/* <h1 className="text-6xl text-center text-purple-600">Hot Hot Cold Coffee: {first8Tourists.length}</h1> */}
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {first8Tourists.map(tourist => (
//                     <Spot
//                         key={tourist._id}
//                         tourist={tourist}
//                         tourists={tourists}
//                         setTourists={setTourists}
//                     > </Spot>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AllTourist;