import { useParams } from "react-router-dom";
import Header from "../../components/header/header";
import { useEffect, useState } from "react";
import "./product.css";
import icon from "../../assets/icon-nav.svg";
function Product() {
    const [data, setData] = useState([]);
    const param = useParams();
    useEffect(() => {
        let items = JSON.parse(localStorage.getItem("products")) || [];
        setData(items.find((el) => el.id == param.id));
    }, [param]);
    return (
        <>
            <Header />
            <>
                <div className="card">
                    <div className="img__wrap">
                        <img src={data.url} alt="" className="img" />
                    </div>
                    <h1 className="card__title">{data.name}</h1>
                    <h2 className="card__price">цена: {data.price}</h2>
                    <p className="card__descrip">описание: {data.descrip}</p>
                    <button className="card__btn">
                        добавить в корзину <img src={icon} alt="" width={20} />
                    </button>
                </div>
            </>
        </>
    );
}

export default Product;
