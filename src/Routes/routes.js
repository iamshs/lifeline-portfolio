import About from "../Pages/About/About";
import Portfolio from "../Pages/Portfolio/Portfolio";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home");

const routes = createBrowserRouter([
    {
        path:"/",
        element : <Main />,
        children : [
            {
                path : "/",
                element : <Home />
            },
            {
                path:"/about",
                element : <About />
            },
            {
                path : "/portfolio" ,
                element : <Portfolio />
            }
        ]
    }
]) ;

export default routes ;