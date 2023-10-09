import React from 'react'
import "./NavBar.css"
function NavBar() {
  return (
    <div className='navBar'><nav>
    <div class="nav nav-tabs" id="nav-tab" role="tablist">
      <button style={{backgroundColor:"blue"}} className='btn' class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Services</button>
      
      <button style={{backgroundColor:"blue"}} className='btn' class="nav-link active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">FAQ</button>
      
      <button style={{backgroundColor:"blue"}} className='btn' class="nav-link active" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Corporate website</button>
      
      <button style={{backgroundColor:"blue"}} className='btn' class="nav-link active" id="nav-epay-tab" data-bs-toggle="tab" data-bs-target="#nav-epay" type="button" role="tab" aria-controls="nav-epay" aria-selected="false">SBIePay Lite</button>
      
      <button style={{backgroundColor:"blue"}} className='btn' class="nav-link active" id="nav-donations-tab" data-bs-toggle="tab" data-bs-target="#nav-donations" type="button" role="tab" aria-controls="nav-Donations" aria-selected="false">Donations</button>

      <button style={{backgroundColor:"blue"}} className='btn' class="nav-link active" id="nav-epay-tab" data-bs-toggle="tab" data-bs-target="#nav-epay" type="button" role="tab" aria-controls="nav-epay" aria-selected="false">SB Collect</button>

      <button style={{backgroundColor:"blue"}} className='btn' class="nav-link active" id="nav-epay-tab" data-bs-toggle="tab" data-bs-target="#nav-epay" type="button" role="tab" aria-controls="nav-epay" aria-selected="false">Electrol Bond</button>


      <button style={{backgroundColor:"blue"}} className='btn' class="nav-link active" id="nav-epay-tab" data-bs-toggle="tab" data-bs-target="#nav-epay" type="button" role="tab" aria-controls="nav-epay" aria-selected="false">mCash</button>

      <button style={{backgroundColor:"blue"}} className='btn' class="nav-link active" id="nav-epay-tab" data-bs-toggle="tab" data-bs-target="#nav-epay" type="button" role="tab" aria-controls="nav-epay" aria-selected="false">Apply for SBI/Current Account</button>


      <button style={{backgroundColor:"blue"}} className='btn' class="nav-link active" id="nav-epay-tab" data-bs-toggle="tab" data-bs-target="#nav-epay" type="button" role="tab" aria-controls="nav-epay" aria-selected="false">SBI UniPay</button>

      <button style={{backgroundColor:"blue"}} className='btn' class="nav-link active" id="nav-epay-tab" data-bs-toggle="tab" data-bs-target="#nav-epay" type="button" role="tab" aria-controls="nav-epay" aria-selected="false">SBI Loans</button>






      
    </div>
  </nav>
  
  </div>
  )
}

export default NavBar