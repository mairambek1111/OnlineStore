import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Addproduct from "./pages/addProduct/addproduct";
import Home from "./pages/home/home";
import Product from "./pages/product/product";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/addproduct",
        element: <Addproduct />,
    },
    {
        path: "/product/:id",
        element: <Product />,
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
