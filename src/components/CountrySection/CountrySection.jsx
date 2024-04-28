
import { useEffect, useState } from "react";
import Country from "./Country/Country";


const CountrySection = ( ) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/countries')
            .then(res => res.json())
            .then(data => {
                setCountries(data)
                console.log(data)
            })
    }, [])
    return (
        <div className="mx-20">
            
            <h2 className="text-5xl text-center p-10">Countries Tourist spots</h2>
            {/* <h2>countries: {countries.length}</h2> */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
             countries.map(country=> <Country key={country._id}
              country={country}>

             </Country>)   
            }
            </div>
        </div>
    );
};

export default CountrySection;