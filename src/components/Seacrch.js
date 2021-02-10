import React, { useState } from 'react'
import './search.css'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from 'react-bootstrap';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';


const Seacrch = ({ searchButtonHidden = false, color }) => {
   const history = useHistory()
   const [{ }, dispatch] = useStateValue()
   const [input, setInput] = useState("")

   const changeHandeler = (e) => {

      setInput(e.target.value)

   }


   const search = (e) => {
      e.preventDefault();

      dispatch({
         type: actionTypes.SET_SEARCH_TERM,
         term: input,
      });
      history.push("/search");
   };



   return (

      <form onSubmit={search} >
         <div className="search-input">
            <SearchIcon className={`search_inputIcon ${color ? 'text-white' : ''}`}></SearchIcon>
            <input name='name' required value={input} onChange={changeHandeler} className=' input' type="text" />
            <MicIcon className='search_micIcon'></MicIcon>

         </div>
         <div className="search-button  text-center mt-4">
            {!searchButtonHidden ? (
               <div className="">
                  <Button className='' type='submit' variant='outlined'>Google Search</Button>
                  <Button className='' type='' variant='outlined'>I'm Feeling Lucky</Button>
               </div>
            ) : (
                  <div className="">
                     <Button className='buttonHidden' type='submit' variant='outlined'>Google Search</Button>
                     <Button className='buttonHidden' type='' variant='outlined'>I'm Feeling Lucky</Button>
                  </div>
               )}




         </div>
      </form>

   )
}

export default Seacrch
