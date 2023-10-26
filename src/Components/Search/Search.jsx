import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import {GoogleInput} from '../GoogleInput/GoogleInput'
import { GoogleButtons } from '../GoogleButtons/GoogleButtons';
import './Search.css'

const Search = ({hideButtons = false}) => {
const [input, setInput] = useState('')


const search = (e)=>{
  e.preventDefault()
}

  return (
    <>
    <form className="search">
        <GoogleInput>
        <SearchIcon className='search__inputIcon'/>
    <input  value={input}  onChange={ (e)=> setInput(e.target.value)}/>
    <MicIcon/>
        </GoogleInput>
        <div className='search__buttons'>
            <GoogleButtons  type='submit' onClick={search} className={hideButtons ? 'search__hideButtons' : ''}>Buscar con Google</GoogleButtons>
            <GoogleButtons className={hideButtons ? 'search__hideButtons' : ''}>Voy a tener suerte</GoogleButtons>
        </div>
    </form>
    </>
  )
}

export default Search