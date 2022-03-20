import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./vendorOwner.css";

export default function VendorOwner() {
  return (
    <div className="vendorOwner">
      <div className="vendorOwnerTitleContainer">
        <h1 className="vendorOwnerTitle">Vendor Owner</h1>
        <Link to={"/vendorcreateproduct"}>
        <button className="vendorOwnerCreateProductButton">Create Product</button>
        </Link>
        
      </div>
      <div className="vendorOwnerContainer">
        <div className="vendorOwnerShow">
          <div className="vendorOwnerShowTop">
            <img src="/sensei.png" alt="vendorOwner img" className="vendorOwnerShowImg" />
            <div className="vendorOwnerShowTopTitle">
              <span className="vendorOwnerShowvendorOwnername">Ricky Sensei</span>
              <span className="vendorOwnerShowvendorOwnerTitle">Software Engineer</span>
            </div>
          </div>
          <div className="vendorOwnerShowBottom">
            <span className="vendorOwnerShowTitle">Account Details</span>
            <div className="vendorOwnerShowInfo">
              <PermIdentity className="vendorOwnerShowIcon" />
              <span className="vendorOwnerShowIfoTitle">rickysensei</span>
            </div>
            <div className="vendorOwnerShowInfo">
              <CalendarToday className="vendorOwnerShowIcon" />
              <span className="vendorOwnerShowIfoTitle">12.07.2002</span>
            </div>
            <span className="vendorOwnerShowTitle">Contact Details</span>
            <div className="vendorOwnerShowInfo">
              <PhoneAndroid className="vendorOwnerShowIcon" />
              <span className="vendorOwnerShowIfoTitle">+254712 345 678</span>
            </div>
            <div className="vendorOwnerShowInfo">
              <MailOutline className="vendorOwnerShowIcon" />
              <span className="vendorOwnerShowIfoTitle">rickysensei@gmail.com</span>
            </div>
            <span className="vendorOwnerShowTitle">Address Details</span>
            <div className="vendorOwnerShowInfo">
              <LocationSearching className="vendorOwnerShowIcon" />
              <span className="vendorOwnerShowIfoTitle">Nakuru City | Kenya</span>
            </div>
          </div>
        </div>
        {/* edit vendorOwner */}
        <div className="vendorOwnerUpdate">
          <span className="vendorOwnerUpdateTitle">Edit</span>
          <form className="vendorOwnerUpdateForm">
            <div className="vendorOwnerUpdateLeft">
              <div className="vendorOwnerUpdateItem">
                <label htmlFor="vendorOwnername">vendorOwnername</label>
                <input type="text" className="vendorOwnerUpdateInput" placeholder="vendorOwnername" required/>
              </div>
              <div className="vendorOwnerUpdateItem">
                <label htmlFor="fullname">Full Name</label>
                <input type="text" className="vendorOwnerUpdateInput" placeholder="full name" required/>
              </div>
              <div className="vendorOwnerUpdateItem">
                <label htmlFor="email">Email</label>
                <input type="email" className="vendorOwnerUpdateInput" placeholder="email@gmail.com" required/>
              </div>
              <div className="vendorOwnerUpdateItem">
                <label htmlFor="phone">Phone</label>
                <input type="tel" className="vendorOwnerUpdateInput" placeholder="+254700 000 000" required/>
              </div>
              <div className="vendorOwnerUpdateItem">
                <label htmlFor="address">Address</label>
                <input type="text" className="vendorOwnerUpdateInput" placeholder="City,Country" required/>
              </div>
            </div>
            <div className="vendorOwnerUpdateRight">
              <div className="vendorOwnerUpdateUpload">
                <img src="/sensei.png" alt="vendorOwner img upload" className="vendorOwnerUpdateImg" />
                <label htmlFor="file"><Publish className="vendorOwnerUpdateIcon"/></label>
                <input type="file" name="" id="file" style={{display:"none"}} required/>
              </div>
              <button className="vendorOwnerUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
