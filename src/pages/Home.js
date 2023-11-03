import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../images/background.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${BannerImage})`}}>
      <div className='headerContainer'>
<h1>Home</h1>
<p>my rule</p>
<Link to = "/rules">
<button>ORDER NOW</button>
</Link>
      </div>
      </div>
  )
}

export default Home