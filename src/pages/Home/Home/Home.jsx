
import Contact from "../../Contact/Contact";
import MyServices from "../../MyServices/MyServices";
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MyServices></MyServices>
            <Contact></Contact>
        </div>
    );
};

export default Home;