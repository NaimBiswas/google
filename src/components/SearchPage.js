import React, { Fragment } from 'react'
import './SearchPage.css'
import { useStateValue } from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch'
import Response from '../response'
import { Link } from 'react-router-dom'
import Search from './Seacrch'
import SearchIcon from '@material-ui/icons/Search';
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DescriptionIcon from '@material-ui/icons/Description';


const SearchPage = () => {
   const [{ term }, dispatch] = useStateValue()
   const { data } = useGoogleSearch(term)

   // const data = Response;
   console.log(data);



   return (

      <div className="SearchPage">
         <div className="searchPage-header">
            <Link to='/'>
               <img className='searchPage_logo' src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
            </Link>
            <div className="searchPageHader_body">
               <Search searchButtonHidden></Search>
               <div className="searcHeader_option justify-content-between d-flex">
                  <ul>
                     <Link to='/' className='nav-link pr-0'><SearchIcon color='secondary'></SearchIcon> All</Link>
                     <Link to='/' className='nav-link pr-0'><ImageIcon color='primary' />Images</Link>
                     <Link to='/' className='nav-link pr-0'><YouTubeIcon color='secondary' />Videos</Link>
                     <Link to='/' className='nav-link pr-0'><DescriptionIcon color='disabled' /> News</Link>
                     <Link to='/' className='nav-link pr-0'><NotListedLocationIcon color='error' />Maps</Link>
                     <Link to='/' className='nav-link pr-0'><MoreVertIcon color='primary' className='mr-0' />More</Link>
                  </ul>
                  <ul>
                     <Link to='/' className='nav-link pr-0'>Setting</Link>
                     <Link to='/' className='nav-link pr-0'>Tool</Link>

                  </ul>
               </div>
            </div>
         </div>
         <div className="searchPage-result">

         </div>
      </div>

   )
}

export default SearchPage
