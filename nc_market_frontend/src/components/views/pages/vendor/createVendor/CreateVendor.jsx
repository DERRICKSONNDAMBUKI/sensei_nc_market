import "./createVendor.css";

export default function CreateVenderOwner() {
  return (
    <div className="CreateVendor">
      <h1 className="CreateVendorTitle">Create Vendor</h1>
      <form className="CreateVendorForm">
        <div className="CreateVendorItem">
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="username" />
        </div>
        <div className="CreateVendorItem">
          <label htmlFor="fullname">Full Name</label>
          <input type="text" placeholder="full name" />
        </div>
        <div className="CreateVendorItem">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="email@gmail.com" />
        </div>
        <div className="CreateVendorItem">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="CreateVendorItem">
          <label htmlFor="phone">Phone</label>
          <input type="tel" placeholder="Phone" />
        </div>
        <div className="CreateVendorItem">
          <label htmlFor="address">Address</label>
          <input type="text" placeholder="address" />
        </div>
        <div className="CreateVendorItem">
          <label htmlFor="gender">Gender</label>
          <div className="CreateVendorGender">
            <input type="radio" name="gender" id="male" value={"male"} />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value={"female"} />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="other" value={"other"} />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="CreateVendorItem">
            <label htmlFor="active">Active</label>
            <select name="active" id="active" className="CreateVendorSelect">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div>
        <button className="CreateVendorButton">Create</button>
      </form>
    </div>
  );
}
