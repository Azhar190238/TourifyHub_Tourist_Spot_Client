


// {/* <button className="btn join-item"> <img src="https://i.postimg.cc/8PrqQLvc/Group-14.png" alt="" /></button>
//           <button className="btn join-item"><img src="https://i.postimg.cc/HxhPFLsb/Group-12.png" alt="" /></button>
//           <button  className="btn "><img src="https://i.postimg.cc/XXM17D5J/Group-13.png" alt="" /></button> */}

import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Spot = ({ tourist }) => {
    const {_id, photo, cost, spot_name, time, seasonality, visitors_per_year } = tourist;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={photo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center ">
                <h2 className="card-title text-center">{spot_name}</h2>
                <div className="flex space-x-3">
                    <p className="w-2/3"><span className="text-lg font-semibold">Average Cost: </span> ${cost} Per day</p>
                    <p className="w-1/3"><span className="text-lg font-semibold">Travel Time: </span>{time}</p>
                </div>
                <div className="flex space-x-3">
                    <p className="w-2/3"><span className="text-lg font-semibold">Total Visitors Per Year: </span>{visitors_per_year}</p>
                    <p className="w-1/3"><span className="text-lg font-semibold">Seasonality: </span>{seasonality}</p>
                </div>
                <div className="">
                    <Link to={`/viewDetails/${_id}`} > <button className="btn btn-wide btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

Spot.propTypes = {
    tourist: PropTypes.shape({
        _id: PropTypes.number.isRequired,
        photo: PropTypes.string.isRequired,
        cost: PropTypes.string.isRequired,
        spot_name: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        seasonality: PropTypes.string.isRequired,
        visitors_per_year: PropTypes.number.isRequired,
    }).isRequired,
};

export default Spot;
