import'./location.styles.css'

import { ReactComponent as Locate } from '../../logos/location-pin-svgrepo-com.svg';

import { Link } from "react-router-dom";

const Location=()=>{
    return(<div className='container'>
  <div className="link-container">
  <Link className='link'>
  <Locate/> ASHALEY-BOTWE SCHOOL JUNCTION  
   </Link>
   <div className='slides'>

   </div>
  </div>
    </div>)
}





export default Location;