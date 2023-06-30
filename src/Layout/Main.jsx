import { Outlet } from "react-router-dom";
import Footer from "../pages/Shareed/Footer/Footer";
import Navbar from "../pages/Shareed/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;