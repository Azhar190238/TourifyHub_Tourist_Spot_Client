import { Link } from "react-router-dom";
import UseTitle from "../../../Title/UseTitle";


const Countries = ({country}) => {
    UseTitle("Country");
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={country.photo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center ">
                <h2 className="card-title text-center">{country.spot_name}</h2>

                <div className="flex space-x-3">
                    <p className="w-1/2"><span className="text-lg font-semibold">Country Name: </span> {country.country_name}</p>
                    <p className="w-1/2"><span className="text-lg font-semibold">Location: </span>{country.location}</p>
                </div>
                <div className="flex space-x-3">
                    <p className="w-1/2"><span className="text-lg font-semibold">Average Cost: </span> {country.cost} Per day</p>
                    <p className="w-1/2"><span className="text-lg font-semibold">Travel Time: </span>{country.time}</p>
                </div>
                <div className="flex space-x-3">
                    <p className="w-1/2"><span className="text-lg font-semibold">Total Visitors Per Year: </span>{country.visitors_per_year}</p>
                    <p className="w-1/2"><span className="text-lg font-semibold">Seasonality: </span>seasonality</p>
                </div>
                <div>
                    <p> <span className="font-semibold">Description: </span> {country.description}</p>
                </div>
                <div className="">
                <Link to={`/viewDetails/${country._id}`} >
                     <button className="btn btn-wide btn-primary">View Details</button>
                     </Link>
                </div>
            </div>
        </div>
    );
};

export default Countries;