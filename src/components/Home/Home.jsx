import Banner from "../Banner/Banner";
import ClientQuestion from "../ClientQuestion/ClientQuestion";
import Statistics from "../Statistics/Statistics";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Statistics></Statistics>
            <ClientQuestion></ClientQuestion>
        </div>
    );
};

export default Home;