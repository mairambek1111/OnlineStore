import Card from "../../components/card/card";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import { useState, useEffect } from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
function Home() {
    const [data, setData] = useState([]);

    const nav = useNavigate();

    useEffect(() => {
        const localStorageData =
            JSON.parse(localStorage.getItem("products")) || [];
        setData(localStorageData);
    }, []);

    function CardclickHandler(id) {
        nav(`/product/${id}`);
    }

    return (
        <>
            <Header />
            <Hero />
            <h1 className="home__title">HOT DEALS</h1>

            <div className="cards">
                {data.slice(0, 3).map((product) => (
                    <>
                        <div
                            className="cards"
                            onClick={() => CardclickHandler(product.id)}
                            key={product.id}
                        >
                            <Card products={product} />
                        </div>
                    </>
                ))}
            </div>
        </>
    );
}

export default Home;
