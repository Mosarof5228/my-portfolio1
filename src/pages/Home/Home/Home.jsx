
import Contact from "../../Contact/Contact";
import MyServices from "../../MyServices/MyServices";
import TechnicalSkills from "../../Technical Skills/TechnicalSkills";
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <TechnicalSkills></TechnicalSkills>
            <MyServices></MyServices>
            <Contact></Contact>
        </div>
    );
};

export default Home;