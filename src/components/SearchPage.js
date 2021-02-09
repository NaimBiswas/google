import React, { Fragment } from 'react'
import './SearchPage.css'
import { useStateValue } from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch'
import Response from '../response'
import { Link } from 'react-router-dom'
import Search from './Seacrch'









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
                     <li className='nav-link pr-0'>All</li>
                     <li className='nav-link'>All</li>
                     <li className='nav-link pr-0'>All</li>
                     <li className='nav-link pr-0'>All</li>
                     <li className='nav-link pr-0'>All</li>
                     <li className='nav-link pr-0'>All</li>
                  </ul>
                  <ul>
                     <li className='nav-link pr-0'>Li</li>
                     <li className='nav-link pr-0'>Li</li>
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
