import { useParams } from "react-router-dom";
import Header from "../../components/header/header";
import { useContext, useEffect, useState } from "react";
import "./product.css";
import icon from "../../assets/icon-nav.svg";
import Context from "../../Contexts";
function Product() {
  const [data, setData] = useState({});
  const param = useParams();
  const { data2 } = useContext(Context);
  return (
    <>
      <Header />
      <>
        <div className="card">
          <div className="img__wrap">
            <img src={data2.url} alt="" className="img" />
          </div>
          <h1 className="card__title">{data2.name}</h1>
          <h2 className="card__price">цена: {data2.price}</h2>
          <p className="card__descrip">описание: {data2.descrip}</p>
          <button className="card__btn">
            добавить в корзину <img src={icon} alt="" width={20} />
          </button>
        </div>
      </>
    </>
  );
}

export default Product;
