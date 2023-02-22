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
            }
        ]
    }
]) ;

export default routes ;