import React from 'react'
import './Home.css'
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import Search from '../../Components/Search/Search';


const Home = () => {
  return (
    <div  className='home'>
        <div className="home__header">
            <div className="home__headerLaeft">
                <Link to='/about'>Sobre Google</Link>
                <Link to='/store'>Tienda</Link>
            </div>

            <div className="home__headerRight">
                <Link to='/gmail'>Gmail</Link>
                <Link to='/images'>Imagenes</Link>
                <IconButton>
                <AppsIcon/>
                </IconButton>
                <Avatar/>
            </div>
        </div>
        <div className="home__body">
          {/* <img src="http://1000marcas.net/wp-content/uploads/2019/11/Google-Logo.png" alt="" /> */}
          <img src="https://wepik.com/api/image/ai/9a76bdc2-00f9-4b20-9ea9-81a1648642e5?thumb=1" alt="" />
          <Search />
        </div>
    </div>
  )
}

export default Home