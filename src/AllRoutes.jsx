import App from "./App";
import Home from "./page/Home";

export const AllRoutes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "*",
                element: <h1 className='text-cyan-50 flex m-auto'>try main route again</h1>
            }
        ]
    },
];

