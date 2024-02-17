import {ReactComponent as SpectacleIcon } from '../../logos/glasses-vision-svgrepo-com.svg'
import './styles/navigationbar.styles.css'

const NavigationBar=()=>{
    return(<div className='nav-bar'>
    <SpectacleIcon className='spectacle-styles'/>
<div className='header'> Pink Palace</div>
    <div className='nav-bar-links'>
       <ul className='nav-links'>
       <li><a href='index.html'>Home</a></li>
       <li><a href='index.html'>Shop</a></li>
       <li><a href='index.html'>Location</a></li>
       <li><a href='index.html'>Contact Us</a></li>
       </ul>
      </div>
        
        
        
    </div>)
}






export default NavigationBar;