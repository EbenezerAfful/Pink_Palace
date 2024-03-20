import {ReactComponent as SpectacleIcon } from '../../logos/glasses-vision-svgrepo-com.svg'
import './styles/navigationbar.styles.css'
import { ReactComponent as Instagram } from '../../logos/instagram-svgrepo-com.svg'
import { ReactComponent as TikTok } from '../../logos/tiktok-fill-svgrepo-com.svg'
import { ReactComponent as Email } from '../../logos/email-svgrepo-com.svg'
import { ReactComponent as Call } from '../../logos/phone-number-svgrepo-com.svg'
import { ReactComponent as Snapchat } from '../../logos/snapchat-svgrepo-com.svg'

const NavigationBar=()=>{
    
    return(<div className='nav'>
       <div className='upper-bar'>
        <ul className='upper-container'>
            <li><a href='https://www.instagram.com/__pink_palace?igsh=dmp2enBuNmtpaWtt'><Instagram/></a></li>
            <li><a><TikTok/></a></li>
            <li><a><Snapchat/></a></li>
        </ul>
        <ul className='upper-container-right'>
            <li><a><Email/> pappykobina11@gmail.com</a></li>
            <li><a><Call/> 0203794341/0598250149</a></li>
        </ul>
       </div>

    
    <div className='nav-bar'>
    <SpectacleIcon className='spectacle-styles'/>
<div className='header'>
<h2 className='sub-header'></h2>
</div>
    <div className='nav-bar-links'>
       <ul className='nav-links'>
       <li><a href='/'>Home</a></li>
       <li><a href='/shop'>Shop</a></li>
       <li><a href='/location'>Location</a></li>
       <li><a href='/contact'>Accessories</a></li>
       </ul>
      </div>
  
        
        
        
    </div>
    </div>)
}






export default NavigationBar;