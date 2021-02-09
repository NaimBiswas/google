import React, { Fragment } from 'react'
import './SearchPage.css'
import { useStateValue } from '../StateProvider'
const SearchPage = () => {
   const [{ term }, dispatch] = useStateValue()
   return (

      <div className="SearchPage">
         <div className="searchPage-header">
            <h3>{term}</h3>
         </div>
         <div className="searchPage-result">

         </div>
      </div>

   )
}

export default SearchPage
