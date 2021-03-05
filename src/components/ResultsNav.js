import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DescriptionIcon from '@material-ui/icons/Description';
const ResultsNav = ({ value, color }) => {
   return (
      <div>
         <ul className='mr-4'>
            <NavLink to='/search' activeClassName='active' className={`nav-link pr-0 ${color ? "text-white" : ''}`}><SearchIcon color='secondary'></SearchIcon> All</NavLink>

            <NavLink activeClassName='active' exact to='/images' className={`nav-link pr-0 ${color ? "text-white" : ''}`}><ImageIcon color='primary' />Images</NavLink>


            <Link to='/' className={`nav-link pr-0 ${color ? "text-white" : ''}`}><YouTubeIcon color='secondary' />Videos</Link>


            <Link to='/' className={`nav-link pr-0 ${color ? "text-white" : ''}`}><DescriptionIcon color='disabled' /> News</Link>


            <Link to='/' className={`nav-link pr-0 ${color ? "text-white" : ''}`}><NotListedLocationIcon color='error' />Maps</Link>


            <Link to='/' className={`nav-link pr-0 ${color ? "text-white" : ''}`}><MoreVertIcon color='primary' className='mr-0' />More</Link>

         </ul>
      </div>
   )
}

export default ResultsNav
