import { useLoaderData } from "react-router-dom";
import Countries from "./Countries/Countries";
import { useEffect, useState } from "react";
import UseTitle from "../../Title/UseTitle";


const AllCountry = () => {
    UseTitle("AllCountry");
    const countryLoader = useLoaderData();
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch(`https://assignment-10-server-tan-sigma.vercel.app/allCountry/${countryLoader.country_name}`)
            .then(res => res.json())
            .then(data => {
                setCountries(data)
                console.log(data)
            })
    }, [])

    
    return (
        <div>
            {/* <h2>length:{countries.length}</h2> */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {
            countries.map(country => <Countries
                 key={country._id}
                 country={country}
            ></Countries>)
           } 
           </div>
        </div>
    );
};

export default AllCountry;