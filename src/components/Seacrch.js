import React, { useState } from 'react'
import './search.css'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from 'react-bootstrap';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';


const Seacrch = ({ searchButtonHidden = false, color, inputValue }) => {
   const history = useHistory()
   const [{ }, dispatch] = useStateValue()
   const [input, setInput] = useState(inputValue)

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
         <div className={`search-input ${color ? 'search-input-dark search-input-dark' : ''}`}>
            <SearchIcon className={`search_inputIcon ${color ? 'text-white' : ''}`}></SearchIcon>
            <input name='name' required value={input} onChange={changeHandeler} className={`input ${color ? 'text-white' : ''}`} />
            <MicIcon className='search_micIcon'></MicIcon>

         </div>
         <div className="search-button  text-center mt-4">
            {!searchButtonHidden ? (
               <div className="">
                  <Button className={`input ResporsiveInput ${color ? 'text-white' : ''}`} type='submit' variant='outlined'>Google Search</Button>
                  <Button className={`input ResporsiveInput  ${color ? 'text-white' : ''}`} type='' variant='outlined'>I'm Feeling Lucky</Button>
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
