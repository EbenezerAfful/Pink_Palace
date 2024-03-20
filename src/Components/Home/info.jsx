import './home.styles.css'
import { Link } from 'react-router-dom';
import { ReactComponent as Visa } from '../../logos/visa-svgrepo-com.svg';
import { ReactComponent as Vodafone } from '../../logos/vodafone-3.svg';
import { ReactComponent as MasterCard } from '../../logos/mastercard-full-svgrepo-com.svg';


const Info=()=>{
    return(
        <div className="info-container">
            <div className="info-content">
            <Link className='info-links'>
            <h1>About us</h1>
            </Link>
          <Link className='info-links'>
          <h1>Frames </h1>
          </Link>  
          <Link className='info-links'>
            <h1>Lenses </h1>
          </Link>
            <Link className='info-links'>
            <h1>Testing </h1>
            </Link>
            </div>

            <div className="info-content1">
            <Link className='info-links'>    
            <h1>Contact Us</h1>
            </Link>
            <Link className='info-links'>
            <h1>FAQs </h1>
            </Link>
            <Link className='info-links'>
            <h1>Privacy </h1>
            </Link>
            </div>
          
            <div className="info-content2">
            <Link className='info-links-header'>    
            <h1>FOLLOW US</h1>
            </Link>
            <Link className='info-links'>
            <h1>Facebook </h1>
            </Link>
            <Link className='info-links'>
            <h1>Instagram </h1>
            </Link>
            <Link className='info-links'>
            <h1>SnapChat</h1>
            </Link>
            <Link className='info-links'>
            <h1>TikTok</h1>
            </Link>
            </div>

            <div className="payment-methods">
            
               <Link className='payment-links'> 
               
                <MasterCard/>
                <Visa/>
                <Vodafone/>
               
               </Link> 
                
        

            </div>



        </div>
    )
}




export default Info;