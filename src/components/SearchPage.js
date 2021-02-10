import React, { Fragment, useState } from 'react'
import './SearchPage.css'
import { useStateValue } from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch'
import Response from '../response'
import { Link, useHistory } from 'react-router-dom'
import Search from './Seacrch'
import SearchIcon from '@material-ui/icons/Search';
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DescriptionIcon from '@material-ui/icons/Description';


import MicIcon from '@material-ui/icons/Mic';
import { Button } from 'react-bootstrap'


const SearchPage = ({ color }) => {
   const [{ term }] = useStateValue()

   const { data } = useGoogleSearch(term)




   return (

      <div className="SearchPage">
         <div className={`searchPage-header ${color ? 'dark' : ''}`}>
            <Link to='/'>
               <img className='searchPage_logo' src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
            </Link>
            <div className="searchPageHader_body">
               <Search searchButtonHidden></Search>

               <div className="searcHeader_option justify-content-between d-flex">
                  <ul className='mr-4'>
                     <Link style={{ borderBottom: '3px solid #ff0000c2', paddingBottom: '34px' }} to='/' className={`nav-link pr-0 ${color ? "text-white" : ''}`}><SearchIcon color='secondary'></SearchIcon> All</Link>
                     <Link to='/' className={`nav-link pr-0 ${color ? "text-white" : ''}`}><ImageIcon color='primary' />Images</Link>
                     <Link to='/' className={`nav-link pr-0 ${color ? "text-white" : ''}`}><YouTubeIcon color='secondary' />Videos</Link>
                     <Link to='/' className={`nav-link pr-0 ${color ? "text-white" : ''}`}><DescriptionIcon color='disabled' /> News</Link>
                     <Link to='/' className={`nav-link pr-0 ${color ? "text-white" : ''}`}><NotListedLocationIcon color='error' />Maps</Link>
                     <Link to='/' className={`nav-link pr-0 ${color ? "text-white" : ''}`}><MoreVertIcon color='primary' className='mr-0' />More</Link>
                  </ul>
                  <ul>
                     <Link to='/' className={`nav-link pr-0 ${color ? "text-white" : ''}`}>Setting</Link>
                     <Link to='/' className={`nav-link pr-0 ${color ? "text-white" : ''}`}>Tool</Link>

                  </ul>
               </div>
            </div>
         </div>

         {term && (
            <div className="searchPage-result ">
               <p className='searchPage_resultCount '>
                  About {data?.searchInformation.formattedTotalResults}  results ({data?.searchInformation.formattedSearchTime}s)  for   {`"${term}"`}
               </p>

               {
                  data?.items.map(item => (
                     <div key={item.cacheId} className="searchResults">
                        <a href={item.link}>
                           {item.displayLink}
                        </a>
                        <h2>{item.title}</h2>
                        <p>{item.snippet}</p>
                     </div>
                  ))
               }

            </div>
         )
         }
      </div>

   )
}

export default SearchPage
