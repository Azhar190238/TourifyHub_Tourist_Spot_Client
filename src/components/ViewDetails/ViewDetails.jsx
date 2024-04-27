import { useLoaderData } from "react-router-dom";
import UseTitle from "../../Title/UseTitle";


const ViewDetails = () => {
    UseTitle("LandDetails");
    const tourist = useLoaderData();

    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={tourist.photo} className="max-w-sm rounded-lg shadow-2xl" />
                <div className="pl-20 space-y-4">
                    <h1 className="text-5xl font-bold">{tourist.spot_name}</h1>
                    <div className="flex space-x-3">

                        <p className="w-1/2"><span className="text-lg font-semibold">Country Name: </span>{tourist.country_name}</p>
                        <p className="w-1/2"><span className="text-lg font-semibold">Location: </span>{tourist.time}</p>
                    </div>
                    <div className="flex space-x-3">
                        <p className="w-1/2"><span className="text-lg font-semibold">Total Visitors Per Year: </span>{tourist.visitors_per_year}</p>
                        <p className="w-1/2"><span className="text-lg font-semibold">Seasonality: </span>{tourist.seasonality}</p>
                    </div>
                    <div className="flex space-x-3">

                        <p className="w-1/2"><span className="text-lg font-semibold">Average Cost: </span>{tourist.cost}</p>
                        <p className="w-1/2"><span className="text-lg font-semibold">Travel Time: </span>{tourist.time}</p>
                    </div>
                    <div className="flex space-x-3">

                        <p className="w-1/2"><span className="text-lg font-semibold">User Name: </span>{tourist.name}</p>
                        <p className="w-1/2"><span className="text-lg font-semibold">User Email: </span>{tourist.email}</p>
                    </div>
                    <div>
                        <p>{tourist.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
