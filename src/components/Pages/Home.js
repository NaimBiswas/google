import React, { Fragment } from 'react'
import './Home.css'
import AppsIcon from '@material-ui/icons/Apps';

const Home = () => {
   return (
      <Fragment>
         <h2>This is our home component sd</h2>
         <div className="home">
            <div className="home_header">

               <div className="header_right">
                  <ul>
                     <li>Gmail</li>
                     <li>Images</li>
                     <li><AppsIcon className='appIcons'></AppsIcon></li>
                     <li></li>
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
