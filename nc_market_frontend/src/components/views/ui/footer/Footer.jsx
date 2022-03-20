import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footerLeft">
          <h4 className="footerLogo">NC Marker</h4>
          <p className="footerDesc">
            Nc market is an E-market platform for people to open their
            businesses, vendor shops, kiosks and vibandas
          </p>
          <div className="socialContainer">
            <div className="socialIcon">
              <Facebook className="footerIconFB" />
            </div>
            <div className="socialIcon">
              <Instagram className="footerIconIG" />
            </div>
            <div className="socialIcon">
              <Twitter className="footerIconTw" />
            </div>
            <div className="socialIcon">
              <Pinterest className="footerIconPin" />
            </div>
          </div>
        </div>
        <div className="footerCenter">
          <h4 className="footerUsefulLinksTitle">Useful Links</h4>
          <ul className="footerUsefulLinksList">
            <li className="footerUseFulLinksItem"><Link to={'/'} className='link'>Home</Link></li>
            <li className="footerUseFulLinksItem"><Link to={'/cart'} className='link'>Cart</Link></li>
            <li className="footerUseFulLinksItem"><Link to={'/vendors'} className='link'>Vendors</Link></li>
            <li className="footerUseFulLinksItem"><Link to={'/products'} className='link'>Products</Link></li>
            <li className="footerUseFulLinksItem"><Link to={'/favourites'} className='link'>Favourites</Link></li>
          </ul>
        </div>
        <div className="footerRight">
          <h4 className="footerRightContact">Contact</h4>
          <div className="footerContactItem">
            <Room />
            <p>Rongo, Migori</p>
          </div>
          <div className="footerContactItem">
            <Phone />
            <p>+25487654321</p>
          </div>
          <div className="footerContactItem">
            <MailOutline />
            sensei@gmail.com
          </div>
        </div>
      </footer>
    </div>
  );
}
