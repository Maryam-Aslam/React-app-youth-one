import { createBrowserRouter } from "react-router";
import App from "../../App";
import About from "./About";
import Home from "./Home";
import Joinus from "./Joinus";
import Vision from "./Vision";
import Mission from "./Mission";
export const routes=createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:[
              {
      index: true,
      element: <Home />
    },
            {
                path:"joinus",
                element:<Joinus/>
            },
             {
                path:"mission",
                element:<Mission/>
            },
             {
                path:"vision",
                element:<Vision/>
            },
             {
                path:"/Home",
                element:<Home />
            },
             {
                path:"*",
                element:"page not found"
            },

        ]
    }
])

