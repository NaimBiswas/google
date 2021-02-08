import React from 'react'
import './search.css'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from 'react-bootstrap';

const Seacrch = () => {
   return (
      <>
         <div className="search-input">
            <SearchIcon className='search_inputIcon'></SearchIcon>
            <input className='input' type="text" />
            <MicIcon className='search_micIcon'></MicIcon>
         </div>
         <div className="search-button  text-center mt-4">
            <Button variant='outlined'>Google Search</Button>
            <Button variant='outlined'>I'm Feeling Lucky</Button>
         </div>
      </>
   )
}

export default Seacrch
