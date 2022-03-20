import { Language, Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <div>
      <header className="header">
        <h1>NC MARKET</h1>
        <div className="navBar">
          <div className="navWrapper">
            <div className="navLeft">
              <Language className="navLanguage">EN</Language>
              <div className="navSearchContainer">
                <input type="text" placeholder="Search" />
                <Search className="navSearch" />
              </div>
            </div>
            <nav className="navCenter">
              <ul className="navLinksList">
                <li className="navLinksItem">
                  <Link to={"/"} className="link">
                    Home
                  </Link>
                 
                </li>
                <li className="navLinksItem">
                  <Link to={"/vendors"} className="link">
                    Vendors
                  </Link>
                </li>
                <li className="navLinksItem">
                  <Link to={"/products"} className="link">
                    Products
                  </Link>
                </li>
                <li className="navLinksItem">
                  <Link to={"/favourites"} className="link">
                    Favourites
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="navRight">
              <div className="navMenuItem">
                <p>Register</p>
              </div>
              <div className="navMenuItem">
                <p>Sign In</p>
              </div>
              <div className="navMenuItem">
                <span className="navCartIcon">2</span>
                <Link to={"/cart"} className="link"><ShoppingCartOutlined/></Link>
                
              </div>
              {/* <div className="navMenuItem">
                <img src="/r_sensei.png" alt="" className="navUserAvatar" />
              </div> */}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
