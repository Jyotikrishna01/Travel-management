//import { CAlert } from '@coreui/react';
//import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { Dropdown } from "flowbite-react";
import { FaUserAlt } from "react-icons/fa";
import SignInForm from '../components/SignInForm'
import {Link,Outlet} from 'react-router-dom';
import Logo from '../CitiesIcon/logo.png'
import './TourNavBar.css'
import Container from 'react-bootstrap/Container';
import India from '../components/india/India';
import Nav from 'react-bootstrap/Nav';
import { FaHeart } from "react-icons/fa";
import Navbar from 'react-bootstrap/Navbar';
import { FaRegHeart } from "react-icons/fa";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
//import Button from 'react-bootstrap/Button';
//import Modal from 'react-bootstrap/Modal';
import World from '../components/world/World';
import User from '../components/User';
import CallNow from '../components/CallNow';
import WorldCity from '../components/world/World';
import ContactUs from '../components/contact/ContactUs';


const TourNavBar = () =>{

    return(
        <>
          <nav className='navbar navbar-expand-md bg-dark justify-content-center sticky-top' data-bs-theme='dark'>
            <ul className='navbar-nav'>
                <li className='nav-item p-2 m-1'>
                  <Link>
                        <a className="navbar-brand" href="#">
                          <img src={Logo} alt="logo" style={{width:'50px',height:'50px'}}/>
                        </a>
                     </Link>
                </li>

                <li className='nav-item m-3 p-2'>
                  <Link>
                     <form style={{display:'flex',textDecorationLine:'none'}}>
                        <input className='form-input m-1' placeholder='Search' type='text'/>
                        <button className='btn btn-primary'>Search</button>
                     </form>
                  </Link>
                </li>

                <li className='nav-item m-3 p-2'>
                  <Link>
                     <CallNow/>
                  </Link>
                </li>

                <li className='nav-item m-3 p-2'>
                  <Link>
                  <FaHeart size={30}/>
                  </Link>
                </li>

                <li className='nav-item m-3 p-2'>
                  <Link className="nav-link m-2 p-2" style={{display:'flex'}} to="/user">
                    <FaUserAlt size={30}/>

                  </Link>
                </li>
            </ul>
          </nav>
          <nav id="navbar" className="navbar navbar-expand-sm bg-light navbar-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
             <span class="navbar-toggler-icon"></span>
           </button>
           <div class="collapse navbar-collapse" id="collapsibleNavbar">
                          <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className='nav-item'>
                              <Link className="nav-link" >
                                 <India/>
                              </Link>
                            </li>
                             <li className='nav-item'>
                              <Link className="nav-link">
                                <WorldCity/>
                              </Link> 
                            </li>
                            <li className='nav-item'>
                              <Link className="nav-link container" to="/special">Specially Curated Tours</Link>
                            </li>
                            <li className='nav-item'>
                              <Link className="nav-link" to="/tour">Tour Package</Link>
                            </li>
                            <li className='nav-item'>
                              <Link  className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                  </div>
            </nav>
            <Outlet/>
        </>
    )
}
export default TourNavBar