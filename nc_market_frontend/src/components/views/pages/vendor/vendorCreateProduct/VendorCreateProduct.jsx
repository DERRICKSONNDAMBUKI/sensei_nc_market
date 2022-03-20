import { Link } from 'react-router-dom'
import './vendorCreateProduct.css'

export default function VendorCreateProduct() {
  return (
    <div className='newProduct'>
        <h1 className="addProductTitle">New Product</h1>
        <form className="addProductForm">
            <div className="addProductItem">
                <label htmlFor="image">Image</label>
                <input type="file" id='file'/>
            </div>
            <div className="addProductItem">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder='item name'/>
            </div>
            <div className="addProductItem">
                <label htmlFor="stock">Stock</label>
                <input type="text" placeholder='stock number'/>
            </div>
            <div className="addProductItem">
                <label htmlFor="active">Active</label>
                <select name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <button className="addProductButton">
                <Link to={'/vendorshop'} className={'link'}>
                  Create Product  
                </Link>
                </button>
        </form>
    </div>
  )
}
