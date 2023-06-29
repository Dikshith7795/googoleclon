import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import "./Search.css";
import { useState } from 'react';
import { useNavigate }from 'react-router'
import {useStateValue} from "../StateProvider.js"
import { actionTypes } from '../reducer';

function Search({hidebuttons}) {
    const[{},dispatch] = useStateValue();     
    const [input,setInput] = useState("");
    const navigate = useNavigate();
    const search=(e)=>{
    e.preventDefault();
    dispatch({
        type:actionTypes.SET_SEARCH_TERM,
        term:input
    })
  // const handeleclick = () => {
   navigate("/searchpage") // when we type on home page input  
    
};
  return (
   <form className='search'>
    <div className="search_input">
    <SearchIcon className='searchicon'/>
        <input value={input} onChange={e=>setInput(e.target.value)} type="text"/>
        <MicIcon/>
    </div>
{
    !hidebuttons ? (<div className="search_buttons">
     <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
     <Button href='https://www.google.com/doodles'type="submit" variant="outlined">I am feeling lucky</Button>
    </div>) : 
    (<div className="search_buttons">
    <Button type="submit" onClick={search} variant="outlined" style= {{display:"none"}}>Google Search</Button>
    
   </div>)


}

   </form>

  )
}

export default Search