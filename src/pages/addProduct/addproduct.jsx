import { useState } from "react";
import Header from "../../components/header/header";
import "./addproduct.css";

function Addproduct() {
    const [data, setdata] = useState({
        url: "",
        name: "",
        price: 0,
        descrip: "",
    });

    function submitHandler(e) {
        e.preventDefault();
        const product = {
            ...data,
            id: new Date().getTime(),
            date: new Date().getTime(),
        };
        let products = JSON.parse(localStorage.getItem("products")) || [];
        if (!Array.isArray(products)) {
            products = [];
        }
        products.push(product);

        localStorage.setItem("products", JSON.stringify(products));

        setdata({
            url: "",
            name: "",
            price: 0,
            descrip: "",
        });
    }
    return (
        <>
            <div className="addproduct">
                <Header />
                <div className="container">
                    <form onSubmit={submitHandler} className="form">
                        <input
                            placeholder="image"
                            value={data.url}
                            className="form__input"
                            onChange={(e) =>
                                setdata({ ...data, url: e.target.value })
                            }
                        />
                        <input
                            placeholder="Name"
                            value={data.name}
                            onChange={(e) =>
                                setdata({ ...data, name: e.target.value })
                            }
                            className="form__input"
                        />
                        <input
                            placeholder="price"
                            value={data.price}
                            onChange={(e) =>
                                setdata({ ...data, price: e.target.value })
                            }
                            className="form__input"
                        />
                        <input
                            placeholder="description"
                            value={data.descrip}
                            onChange={(e) =>
                                setdata({ ...data, descrip: e.target.value })
                            }
                            className="form__input"
                        />
                        <button onClick={submitHandler} className="btn__input">
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Addproduct;
