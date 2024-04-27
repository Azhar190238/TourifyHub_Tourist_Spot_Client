// import AllTourist from "../AllSpot/AllTourist";
import Banner from "../Banner/Banner";
import ClientQuestion from "../ClientQuestion/ClientQuestion";
import CountrySection from "../CountrySection/CountrySection";
import Statistics from "../Statistics/Statistics";
import TouristSpot from "../TouristSpot/TouristSpot";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-5xl text-center p-10">Tourists Spots</h2>
            <TouristSpot></TouristSpot>
            <CountrySection></CountrySection>
            <Statistics></Statistics>
            <ClientQuestion></ClientQuestion>
        </div>
    );
};

export default Home;