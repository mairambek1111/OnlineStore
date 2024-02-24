import { Link } from "react-router-dom";
import "./header.css";
import iconNav from "../../assets/icon-nav.svg";
import logoIcon from "../../assets/logo.svg";
function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__content">
            <div className="header__info">
              <Link to="/" className="header__logo">
                <img src={logoIcon} alt="" />
              </Link>
              <nav className="header__nav">
                <Link to="/Allcars/:id" className="nav__link">
                  ALLCARS AZIRET sultan
                </Link>
                <Link to="/" className="nav__link">
                  HOME
                </Link>
                <Link to="/addproduct" className="nav__link">
                  ADDPRODUCT
                </Link>
                <button className="btn__nav">
                  Корзина
                  <img src={iconNav} alt="" width={18} />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
