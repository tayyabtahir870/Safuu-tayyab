import React from 'react'
import {BsTwitter} from 'react-icons/bs'
import {FaDiscord} from 'react-icons/fa'
import {FaTelegramPlane} from 'react-icons/fa'
import {SiMedium} from 'react-icons/si'

function Header() {
  return (
    
      
         <div>
        <nav class="navbar navbar-expand-lg  py-5   ">
          <div class=" container-fluid bg-black position-fixed  header py-2 ">
          
            <a class="navbar-brand" href="/">
            <button className='header-button'><b>SAFUU</b></button>
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item"></li>
                  <li class="nav-item">
                    <a className="nav-link mt-3 " to='/technology'>
                      < BsTwitter color='white' size={25}/>
                    </a> 
                   
                  </li>{" "} 
                  <li class="nav-item">
                    <a class="nav-link mt-3" to='/community'>
                      <FaDiscord color='white' size={25}/>
                    </a>
                  </li>{" "} 
                  <li class="nav-item">
                    <a class="nav-link mt-3" to='/aboutpage'>
                     <FaTelegramPlane color='white' size={25}/>
                    </a>
                  </li>{" "} 
                  <li class="nav-item">
                    <a class="nav-link mt-3" to="/blog">
                    <SiMedium color='white' size={25}/>
                    </a>
                  </li>{" "} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <li class="nav-item">
                    <a class="nav-link " to="/build">
                    <button className='header-button2'><b>SAFUU</b></button>
                    </a>
                  </li>{" "} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <li class="nav-item">
                    <a class="nav-link" to="/contact">
                    <button className='header-button1'><b>Connect Wallet</b></button>
                    </a>
                  </li>{" "} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </ul>
              </div>
            </div>
           
          </div>
          </nav>
          </div>
          
        
       
     
   
    
  
    
   
    
  )
}

export default Header