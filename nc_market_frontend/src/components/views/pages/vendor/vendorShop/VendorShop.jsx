import React from 'react'
import SideBar from '../../../ui/sidebar/SideBar'
import VendorOwner from '../vendorOwner/VendorOwner'
import './vendorShop.css'

export default function VendorShop() {
  return (
    <div className='vendorShop'>
      <SideBar/>
      <VendorOwner/>
      </div>
  )
}
