import React from 'react'
import { Link } from 'react-router-dom'
import "./SearchPage.css"
import Search from '../../Components/Search/Search'
import SearchIcon from '@mui/icons-material/Search';
import { Apps, Description, Image, LocalOffer, MoreVert, Room } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { selectTextString } from '../../features/textSlice';
import { useSelector } from 'react-redux';
import useGoogleSearch from '../../Hooks/useGoogle';

const SearchPage = () => {

const textString = useSelector(selectTextString);
const {data} = useGoogleSearch(textString)



  return (
    <div className='searchPage'>
      <div className="searchPage__header">
            <Link to="/" >
                <img className='searchPage__logo' src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="logo"/>
            </Link>
      <div className="searchPage__headerCenter">
        <Search hideButtons/>
        <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
                <div className="searchPage__option">
                <SearchIcon fontSize='small'/>
                <Link to="/all">All</Link>
                </div>
                <div className="searchPage__option">
                <Description fontSize='small'/>
                <Link to="/news">News</Link>
                </div>
                <div className="searchPage__option">
                <Image fontSize='small'/>
                <Link to="/images">Images</Link>
                </div>
                <div className="searchPage__option">
                <LocalOffer fontSize='small'/>
                <Link to="/shopping">Shopping</Link>
                </div>
                <div className="searchPage__option">
                <Room fontSize='small'/>
                <Link to="/maps">Maps</Link>
                </div>
                <div className="searchPage__option">
                <MoreVert fontSize='small'/>
                <Link to="/more">More</Link>
                </div>
            </div>
            <div className="searchPage__optionsRight">
            <div className="searchPage__option">
            <Link to="/settings">Settings</Link>
            </div>
            <div className="searchPage__option">
            <Link to="/tools">Tools</Link>
            </div>
            </div>
        </div>
      </div>
      <div className="searchPage__headerRight">
        <Apps fontSize='small'/>
        <Avatar className='headerRight__avatar'/>
      </div>
      </div>
      {textString &&
      
      <div className='searchPage__result'>
        <p className='searchPage__resultCount'>
          About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds)
        </p>
      </div>
      
      }
    </div>
  )
}

export default SearchPage
