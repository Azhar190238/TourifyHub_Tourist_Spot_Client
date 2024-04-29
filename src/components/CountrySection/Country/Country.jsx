import { Link } from "react-router-dom";

const Country = ({country}) => {
    const {country_name, photo, description}= country;
    return (
<div className=" relative
 w-96  shadow-xl image-full p-2">
  <figure><img src={photo} alt="Shoes" /></figure>
  <div className="">
    <h2 className="card-title  text-4xl justify-center text-white absolute top-16 left-24">{country_name}</h2>
    <p className="text-white px-6 absolute text-center top-28 ">{description}</p>
    
    <Link to={`/allCountry/${country_name}`}>
  <div className="card-actions justify-center">
    <button className="btn btn-primary absolute text-center top-48">Explore all the tourist spot</button> 
  </div>
</Link>
    
  </div>
</div>
    );
};

export default Country;