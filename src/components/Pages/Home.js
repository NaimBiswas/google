import React, { Fragment } from 'react'
import './Home.css'
import AppsIcon from '@material-ui/icons/Apps';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { Dropdown, NavItem, NavLink } from 'react-bootstrap';
import Seacrch from '../Seacrch';

const Home = () => {
   return (
      <Fragment>
         <div className="home">
            <div className="home_header">

               <div className="header_right">
                  <ul>
                     <li><Link to='/gmail'>Gmail</Link></li>
                     <li><Link to='/images'>Images</Link></li>

                     <li>

                        <Dropdown as={NavItem}>
                           <Dropdown.Toggle as={NavLink}>
                              <AppsIcon ></AppsIcon>
                           </Dropdown.Toggle>
                           <Dropdown.Menu className='showName'>
                              <Dropdown.Item>Hello there!</Dropdown.Item>
                           </Dropdown.Menu>
                        </Dropdown>
                     </li>
                     <li className='appIcons'><Link to='/account'><AccountCircleIcon fontSize='large' color='action'></AccountCircleIcon ></Link></li>
                  </ul>

               </div>
            </div>
            <div className="home_body">
               <div className="google-icon">
                  <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
               </div>
               <div className="google-seacrch-input">
                  {/* Seacrh Conponent here  */}
                  <Seacrch ></Seacrch>
               </div>
            </div>
         </div>
      </Fragment>
   )
}

export default Home
