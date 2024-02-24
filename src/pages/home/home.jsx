import Card from "../../components/card/card";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import { useState, useEffect, useContext } from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
import Context from "../../Contexts";
function Home() {
  //   const { data } = useContext();
  const { data2 } = useContext(Context);
  // const [data, setData] = useState([]);

  const nav = useNavigate();

  function CardclickHandler(id) {
    nav(`/product/${id}`);
  }

  return (
    <>
      <Header />
      <Hero />
      <h1 className="home__title">HOT DEALS</h1>

      <div className="cards">
        {data2?.map((product) => (
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
