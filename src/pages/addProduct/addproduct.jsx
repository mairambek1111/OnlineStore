import { useState, useEffect } from "react";
import Header from "../../components/header/header";
import "./addproduct.css";
import { useLocation } from "react-router-dom";

function Addproduct() {
    const [data, setdata] = useState({
        url: "",
        name: "",
        price: 0,
        descrip: "",
    });

    const [editing, setEditing] = useState(false);

    const { search } = useLocation();
    const param = new URLSearchParams(search);
    const id = param.get("Editid");
    useEffect(() => {
        if (id !== null) {
            let items = JSON.parse(localStorage.getItem("products")) || [];
            const editproducts = items.find((el) => el.id == id);
            if (editproducts) {
                setdata(editproducts);
                setEditing(true);
                console.log(data);
            }
        }
    }, [id]);

    function submitHandler(e) {
        e.preventDefault();
        let product = {
            ...data,
            id: new Date().getTime(),
            date: new Date().getTime(),
        };

        const products = JSON.parse(localStorage.getItem("products")) || [];
        if (editing) {
            let updateProducts = products.map((el) => {
                if (el.id == product.id) {
                    return product;
                } else {
                    return el;
                }
            });

            localStorage.setItem("products", JSON.stringify(updateProducts));
        } else {
            products.push(product);
            localStorage.setItem("products", JSON.stringify(products));
        }

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
                        <button type="submit" className="btn__input">
                            {editing ? "Edit" : "SUBMIT"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Addproduct;
