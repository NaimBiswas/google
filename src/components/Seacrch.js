import React from 'react'
import './search.css'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';

const Seacrch = () => {
   return (
      <div>
         <SearchIcon className='search_inputIcon'></SearchIcon>
         <input type="text" />
         <MicIcon></MicIcon>
      </div>
   )
}

export default Seacrch
