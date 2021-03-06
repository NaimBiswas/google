import React, { Fragment } from 'react'
import './Home.css'
import AppsIcon from '@material-ui/icons/Apps';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { Dropdown, NavItem, NavLink } from 'react-bootstrap';
import Seacrch from '../Seacrch';
import { Button } from 'react-bootstrap';
import { Brightness3, WbSunny } from '@material-ui/icons';

const Home = ({ value, color }) => {

   return (
      <Fragment>
         <div className="home">
            <div className="home_header">

               <div className="header_right">
                  <ul>
                     <li ><Link className={color ? 'text-white' : ''} to='/gmail'>Gmail</Link></li>
                     <li><Link className={color ? 'text-white' : ''} to='/images'>Images</Link></li>

                     <li>

                        <Dropdown as={NavItem}>
                           <Dropdown.Toggle as={NavLink}>
                              <AppsIcon className={color ? 'text-white' : ''} ></AppsIcon>
                           </Dropdown.Toggle>
                           <Dropdown.Menu className='showName'>
                              <Dropdown.Item className={color ? 'text-dark' : ''} >Hello there!</Dropdown.Item>
                           </Dropdown.Menu>
                        </Dropdown>
                     </li>
                     <li className='appIcons'><Link to='/account'><AccountCircleIcon className={color ? 'text-white' : ''} fontSize='large' color='action'></AccountCircleIcon ></Link>
                     </li>
                     <li className='appIcons'>

                        {
                           color === false && <Brightness3 className='mt-2' style={{ cursor: 'pointer' }} onClick={() => value(preMode => !preMode)} />
                        }
                        {
                           color === true && <WbSunny className='mt-2' style={{ cursor: 'pointer' }} onClick={() => value(preMode => !preMode)} />
                        }


                     </li>
                  </ul>

               </div>
            </div>
            <div className="home_body">
               <div className="google-icon">
                  <img className='respornSiveLogo' src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
               </div>
               <div className="google-seacrch-input">
                  {/* Seacrh Conponent here  */}
                  <Seacrch color={color}></Seacrch>
               </div>
            </div>
         </div>
      </Fragment >
   )
}

export default Home
