import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage'
import Auth from './components/Authentication/Auth'
import Register from './components/Authentication/Register'
import UserAdmin from './Screen/UserAdmin';
import Contact from './Screen/Contact';
import Services from './Screen/Services';
import Paymentgateway from './Screen/Paymentgateway';
const AllRouter = () => {
  return (
    <div>
      <Router>
         <Routes>
         <Route path='/register' element={<Register />} />
         <Route path='/login' element={<Auth />} />
         <Route path='/useradmin' element={<UserAdmin />} />
         </Routes>
        
        <Routes>
          
          <Route path='/' element={<Homepage />} />
          <Route path='/contact' element={<Contact />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/payment' element={<Paymentgateway/>}/>
        </Routes>
       
       
      </Router>
    </div>
  )
}

export default AllRouter
