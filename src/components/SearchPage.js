import React, { Fragment, useState } from 'react'
import './SearchPage.css'
import { useStateValue } from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch'
import Response from '../response'
import { Link, useHistory, NavLink } from 'react-router-dom'
import Search from './Seacrch'



import MicIcon from '@material-ui/icons/Mic';
import { Button, Spinner } from 'react-bootstrap'
import ResultsNav from './ResultsNav'


const SearchPage = ({ color, value }) => {
   const [{ term }] = useStateValue()

   const { data } = useGoogleSearch(term)



   return (

      <div className="SearchPage">
         <div className={`searchPage-header  ${color ? 'dark' : ''}`}>

            <Link to='/'>
               <img className='searchPage_logo' src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
            </Link>

            <div className="searchPageHader_body">
               <Search color={color} searchButtonHidden></Search>





               <div className="searcHeader_option justify-content-between d-flex">
                  <ResultsNav value={value} color={color}></ResultsNav>
                  <ul>
                     <Link to='/' className={`nav-link pr-0 ${color ? "text-white" : ''}`}>Setting</Link>
                     <Link to='/' className={`nav-link pr-0 ${color ? "text-white" : ''}`}>Tool</Link>

                  </ul>
               </div>


            </div>

            <div style={{ position: 'absolute', right: '30px', zIndex: '0000009999999' }} className="Button">
               <button className={`btn btn-lg ${color ? 'darkButton ' : 'buttonLight'}`} onClick={() => value(preMode => !preMode)} >{color ? 'Light Mode' : 'Dark Mode'}</button>
            </div>
         </div>

         {term && (
            <div className="searchPage-result  ">
               <p className='searchPage_resultCount '>
                  About {data?.searchInformation.formattedTotalResults}  results ({data?.searchInformation.formattedSearchTime}s)  for   {`"${term}"`}
               </p>

               {
                  data?.items.map((item, index) => (
                     <div key={index} className="searchResults pb-5">
                        <a className='searchResult-link' href={item.link}>
                           {item.displayLink} <span className='mt-1'>👇</span>
                        </a>
                        <h2 className='searchResult-header'>{item.title}</h2>
                        <p className='searchResult-description'>{item.snippet}</p>
                     </div>
                  ))
               }
               {
                  !data && (
                     <div className="text-left pb-5 pt-5">
                        <Spinner animation="border" role="status" variant='info'>
                           <span className="sr-only">Loading...</span>
                        </Spinner>
                     </div>
                  )
               }

            </div>
         )
         }
      </div>

   )
}

export default SearchPage
