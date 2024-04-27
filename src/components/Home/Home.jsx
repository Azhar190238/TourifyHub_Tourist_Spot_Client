import AllTourist from "../AllSpot/AllTourist";
import Banner from "../Banner/Banner";
import ClientQuestion from "../ClientQuestion/ClientQuestion";
import Statistics from "../Statistics/Statistics";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-5xl text-center p-10">Tourists Spots</h2>
            <AllTourist></AllTourist>
            <Statistics></Statistics>
            <ClientQuestion></ClientQuestion>
        </div>
    );
};

export default Home;