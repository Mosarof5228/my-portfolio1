
import Contact from "../../Contact/Contact";
import MyServices from "../../MyServices/MyServices";
import Projects from "../../Projects/Projects";
import TechnicalSkills from "../../Technical Skills/TechnicalSkills";
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <AboutMe></AboutMe>
            <TechnicalSkills></TechnicalSkills>
            <Projects></Projects>
            <MyServices></MyServices>
            <Contact></Contact>
        </div>
    );
};

export default Home;