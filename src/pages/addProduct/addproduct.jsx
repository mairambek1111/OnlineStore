import { useState, useEffect, useContext } from "react";
import Header from "../../components/header/header";
import "./addproduct.css";
import { useLocation } from "react-router-dom";
import Context from "../../Contexts";

function Addproduct() {
  const { data2 } = useContext(Context);
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
  if (id !== null) {
    const editproducts = data2.find((el) => el.id == id);
    if (editproducts) {
      setdata(editproducts);
      setEditing(true);
    }
  }
  function submitHandler(e) {
    e.preventDefault();
    let product = {
      ...data,
      id: new Date().getTime(),
      date: new Date().getTime(),
    };
    if (editing) {
      let updateProducts = data2.map((el) => {
        if (el.id == product.id) {
          return product;
        } else {
          return el;
        }
      });
      data2.push(updateProducts);
    } else {
      data2.push(product);
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
              onChange={(e) => setdata({ ...data, url: e.target.value })}
            />

            <input
              placeholder="Name"
              value={data.name}
              onChange={(e) => setdata({ ...data, name: e.target.value })}
              className="form__input"
            />
            <input
              placeholder="price"
              value={data.price}
              onChange={(e) => setdata({ ...data, price: e.target.value })}
              className="form__input"
            />
            <input
              placeholder="description"
              value={data.descrip}
              onChange={(e) => setdata({ ...data, descrip: e.target.value })}
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
