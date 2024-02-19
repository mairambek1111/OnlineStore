/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import icon from "../../assets/icon-nav.svg";
import Header from "../../components/header/header";
import "./AllCars.css";
import { Button, Flex, Input } from "antd";
import { Dropdown } from "antd";

import { useNavigate } from "react-router-dom";

function Allcars() {
    const [data, setData] = useState([]);
    const nav = useNavigate();
    const items = [
        {
            key: "1",
            label: "Новые",
        },
        {
            key: "2",
            label: "Дорогие",
        },
        {
            key: "3",
            label: "Дещевые",
        },
    ];
    useEffect(() => {
        const products = JSON.parse(localStorage.getItem("products")) || [];
        setData(products);
    }, []);

    function CardClickHandler(id) {
        nav(`/product/${id}`);
    }

    function inputChanged(e) {
        const searchText = e.target.value.toLowerCase();
        const localStorageData =
            JSON.parse(localStorage.getItem("products")) || [];
        const filterProducts = localStorageData.filter((el) =>
            el.name.toLowerCase().includes(searchText)
        );
        setData(filterProducts);
    }

    return (
        <>
            <Header />
            <Flex onChange={inputChanged} className="input">
                <Input placeholder="Search" />
                <Dropdown
                    menu={{
                        items,
                    }}
                    placement="bottomLeft"
                >
                    <Button>Menu</Button>
                </Dropdown>
            </Flex>
            <div className="Cars__lists">
                {data.map((product, id) => (
                    <div
                        onClick={() => CardClickHandler(product.id)}
                        key={id}
                        className="Cars__list"
                    >
                        <div className="img__wrap">
                            <img
                                src={product.url}
                                alt=""
                                className="img__list"
                            />
                        </div>
                        <h1 className="Cars__title">
                            Название: {product.name}
                        </h1>
                        <h1 className="Cars__price">Цена: {product.price}</h1>
                        <button className="btn__Cars">
                            добавить в корзину{" "}
                            <img src={icon} alt="" width={20} />
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Allcars;
