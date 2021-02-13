import React from 'react'
import { Spinner } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import Search from '../Seacrch'
import '../search.css'

import { useStateValue } from '../../StateProvider'
import useGoogleSearch from '../../useGoogleSearch'
import ResultsNav from '../ResultsNav'

const Images = ({ value, color }) => {
   const [{ term }] = useStateValue()

   const { data } = useGoogleSearch(term)
   console.log(data);
   return (
      <div className="SearchPage">
         <div className={`searchPage-header  ${color ? 'dark' : ''}`}>

            <Link to='/'>
               <img className='searchPage_logo' src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
            </Link>

            <div className="searchPageHader_body">
               <Search searchButtonHidden></Search>





               <div className="searcHeader_option justify-content-between d-flex">
                  <ResultsNav value={value} color={color} />
                  <ul>
                     <Link to='/' className={`nav-link pr-0 ${color ? "text-white" : ''}`}>Setting</Link>
                     <Link to='/' className={`nav-link pr-0 ${color ? "text-white" : ''}`}>Tool</Link>

                  </ul>
               </div>


            </div>

            <div style={{ position: 'absolute', right: '30px', zIndex: '0000009999999' }} className="Button">
               <button className={`btn btn-lg ${color ? 'darkButton ' : 'buttonLight'}`} onClick={() => value(preMode => !preMode)} >{color ? 'Light Mode' : 'Gradient Mode'}</button>
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
                        <img src={item.pagemap.cse_image[0].src} alt="" />

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

export default Images
