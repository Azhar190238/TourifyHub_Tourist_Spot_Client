// import AllTourist from "../AllSpot/AllTourist";
import Banner from "../Banner/Banner";
import ClientQuestion from "../ClientQuestion/ClientQuestion";
import Statistics from "../Statistics/Statistics";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <AllTourist></AllTourist> */}
            <Statistics></Statistics>
            <ClientQuestion></ClientQuestion>
        </div>
    );
};

export default Home;