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
            onClick: sortByDate,
        },
        {
            key: "2",
            label: "Дорогие",
            onClick: sortByHighPrice,
        },
        {
            key: "3",
            label: "Дещевые",
            onClick: sortByLowPrice,
        },
    ];
    useEffect(() => {
        const products = JSON.parse(localStorage.getItem("products")) || [];
        setData(products);
    }, []);
    function CardClickHandler(id) {
        nav(`/product/${id}`);
    }
    function EditClickHandler(id, e) {
        e.stopPropagation();
        nav(`/addproduct?Editid=${id}`);
    }

    function inputChanged(e) {
        const localStorageData =
            JSON.parse(localStorage.getItem("products")) || [];
        const filterProducts = localStorageData.filter((el) =>
            el.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setData(filterProducts);
    }

    function sortByDate() {
        setData([...data].sort((a, b) => b.date - a.date));
    }

    function sortByHighPrice() {
        setData(
            [...data].sort(
                (a, b) =>
                    parseInt(b.price.replace(/\s/g, "")) -
                    parseInt(a.price.replace(/\s/g, ""))
            )
        );
    }

    function sortByLowPrice() {
        setData(
            [...data].sort(
                (a, b) =>
                    parseInt(a.price.replace(/\s/g, "")) -
                    parseInt(b.price.replace(/\s/g, ""))
            )
        );
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
                >
                    <Button>Search</Button>
                </Dropdown>
            </Flex>
            <div className="Cars__lists">
                {data.map((product, id) => (
                    <div
                        key={id}
                        className="Cars__list"
                        onClick={() => CardClickHandler(product.id)}
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
                        <h1 className="Cars__price">Цена: {product.price} </h1>
                        <button className="btn__Cars">
                            добавить в корзину{""}
                            <img src={icon} alt="" width={20} />
                        </button>
                        <button
                            className="btn__Cars"
                            onClick={(e) => EditClickHandler(product.id, e)}
                        >
                            Edit{""}
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Allcars;
