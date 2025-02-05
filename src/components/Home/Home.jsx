

import { useState } from "react";
import Banner from "../Banner/Banner";
import ClientQuestion from "../ClientQuestion/ClientQuestion";
import CountrySection from "../CountrySection/CountrySection";
import Statistics from "../Statistics/Statistics";
import TouristSpot from "../TouristSpot/TouristSpot";
import UseTitle from "../../Title/UseTitle";

const Home = () => {
    UseTitle("Home");
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };

    return (
        <div className={` ${isDarkTheme ? "bg-gray-700 text-gray-400" : "bg-white"} min-h-screen transition-colors duration-500`}>
            <Banner></Banner>
            <h2 className="text-5xl text-center p-10">Tourists Spots</h2>
            <TouristSpot></TouristSpot>
            <CountrySection></CountrySection>
            <Statistics></Statistics>
            <ClientQuestion></ClientQuestion>

            {/* Dark/Light Theme Toggle Button */}
            <div className="absolute top-24 md:top-12 left-14 md:left-80">
                <button
                    className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full focus:outline-none"
                    onClick={toggleTheme}
                >
                    {isDarkTheme ? "Light" : "Dark"} Theme
                </button>
            </div>
        </div>
    );
};

export default Home;
