import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Addproduct from "./pages/addProduct/addproduct";
import Home from "./pages/home/home";
import Product from "./pages/product/product";
import Allcars from "./pages/AllCars/allCars";
import { useState } from "react";
import Context from "./Contexts";
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
  {
    path: "/AllCars/:id",
    element: <Allcars />,
  },
]);

function App() {
  const [data2, setData] = useState([]);
  console.log(data2);
  return (
    <>
      <Context.Provider value={{ data2: data2 }}>
        <RouterProvider router={router} />
      </Context.Provider>
    </>
  );
}

export default App;
