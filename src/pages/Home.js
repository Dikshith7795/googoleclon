import React from 'react'
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import "./Home.css"
import Search from "./Search";
import Footer from './Footer';


function Home() {
  return (
    <div>
      <div className="home">
        <div className="home_header">
            <div className="home_headerleft">
                <p>About</p>
                <p>Store</p>
            
            </div>
            <div className="home_headeright">
                <p>Gmail</p>
                <p>Images</p>  
                <AppsIcon className='appsicon'/>
                <Avatar/>
            </div>
        </div>
        <div className="home_body">
            <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt="" />
        </div>
        <div className="home_inputContainer">
            <Search/>
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Home
