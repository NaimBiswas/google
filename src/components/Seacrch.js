import React, { useState } from 'react'
import './search.css'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from 'react-bootstrap';

const Seacrch = () => {
   const [Input, setInput] = useState('')
   const search = e => {
      e.preventDefault();
      alert('This is Worked ');
   }
   console.log(Input);
   return (
      <form>
         <div className="search-input">
            <SearchIcon className='search_inputIcon'></SearchIcon>
            <input value={Input} onChange={e => setInput(e.target.value)} className='input' type="text" />
            <MicIcon className='search_micIcon'></MicIcon>
         </div>
         <div className="search-button  text-center mt-4">
            <Button type='submit' onClick={search} variant='outlined'>Google Search</Button>
            <Button variant='outlined'>I'm Feeling Lucky</Button>
         </div>
      </form>
   )
}

export default Seacrch
