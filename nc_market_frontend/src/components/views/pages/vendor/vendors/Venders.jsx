import "./vendors.css";
import { Link } from "react-router-dom";

export default function Venders() {
  return (
    <div>
      <h2 className="venders">Venders</h2>
      <h3 className="myVenders">My vendors</h3>
      {/* list my vendors */}
      <p>list of my vendors shops</p>
      <div className="createNewVendor">
        <Link to={"/createvendorowner"}>
          <button className="vendorOwnerAddButton">Create Product</button>
        </Link>
      </div>
    </div>
  );
}
