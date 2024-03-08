import {ReactComponent as SpectacleIcon } from '../../logos/glasses-vision-svgrepo-com.svg'
import './styles/navigationbar.styles.css'

const NavigationBar=()=>{
    
    return(<div>
        <div className='upper-bar'></div>

    
    <div className='nav-bar'>
    <SpectacleIcon className='spectacle-styles'/>
<div className='header'>Pink Palace
<h2 className='sub-header'>EYEWEAR AND JEWELRY</h2>
</div>
    <div className='nav-bar-links'>
       <ul className='nav-links'>
       <li><a href='/'>Home</a></li>
       <li><a href='/shop'>Shop</a></li>
       <li><a href='/location'>Location</a></li>
       <li><a href='/contact'>Contact Us</a></li>
       </ul>
      </div>
  
        
        
        
    </div>
    </div>)
}






export default NavigationBar;