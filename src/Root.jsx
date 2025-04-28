import { Outlet } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
 

const Root = () => {
    return (
        <div>
          <NavMenu/>
            <Outlet></Outlet>
        <Footer/>
        </div>
    );
};

export default Root;