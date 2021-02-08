import React, { Fragment } from 'react'
import './Home.css'
import AppsIcon from '@material-ui/icons/Apps';
import { Link } from 'react-router-dom';

import { Dropdown, NavItem, NavLink } from 'react-bootstrap';

const Home = () => {
   return (
      <Fragment>
         <h2>This is our home component sd</h2>
         <div className="home">
            <div className="home_header">

               <div className="header_right">
                  <ul>
                     <li><Link to='/gmail'>Gmail</Link></li>
                     <li><Link to='/images'>Images</Link></li>
                     <li>

                        <Dropdown as={NavItem}>
                           <Dropdown.Toggle as={NavLink}>
                              <AppsIcon className='appIcons'></AppsIcon>
                           </Dropdown.Toggle>
                           <Dropdown.Menu className='showName'>
                              <Dropdown.Item>Hello there!</Dropdown.Item>
                           </Dropdown.Menu>
                        </Dropdown>
                     </li>
                  </ul>

               </div>
            </div>
            <div className="home_body">

            </div>
         </div>
      </Fragment>
   )
}

export default Home
