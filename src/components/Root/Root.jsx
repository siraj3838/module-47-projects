import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div>
            <div className="bg-[#9873FF0D]">
            <div className="max-w-screen-xl mx-auto">
                <Header></Header>
            </div>    
            </div>
            <div><Outlet></Outlet></div>
            <div className="bg-[#1A1919]">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;