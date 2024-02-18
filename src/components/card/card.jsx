/* eslint-disable react/prop-types */
import icon from "../../assets/icon-nav.svg";
import "./card.css";
function Card({ products }) {
    return (
        <div className="card__lists">
            <div className="img__wrap">
                {" "}
                <img src={products.url} alt="" className="img__list" />
            </div>
            <h1 className="card__title">Название: {products.name}</h1>
            <h1 className="card__price">Цена: {products.price}</h1>
            <button className="btn__card">
                добавить в корзину <img src={icon} alt="" width={20} />
            </button>
        </div>
    );
}

export default Card;
