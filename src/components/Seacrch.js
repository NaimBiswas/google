import React, { useState } from 'react'
import './search.css'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';


const Seacrch = ({ searchButtonHidden = false }) => {

   const [Input, setInput] = useState('')
   const history = useHistory()
   const search = e => {
      e.preventDefault();

      history.push('/search')
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


            <div className="">
               <Button className={!searchButtonHidden ? '' : 'buttonHidden'} type='submit' onClick={search} variant='outlined'>Google Search</Button>
               <Button className={!searchButtonHidden ? '' : 'buttonHidden'} type='' variant='outlined'>I'm Feeling Lucky</Button>
            </div>


         </div>
      </form>
   )
}

export default Seacrch
