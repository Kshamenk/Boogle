import React from 'react'
import './Home.css'


const Home = () => {
  return (
    <div  className='home'>
        <div className="home__header">
            <div className="home__headerLaeft">
                <p>Sobre Google</p>
                <p>Tienda</p>
            </div>

            <div className="home__headerRight">
                <p>Gmail</p>
                <p>Imagenes</p>
                <p>🟰</p>
            </div>
        </div>
    </div>
  )
}

export default Home