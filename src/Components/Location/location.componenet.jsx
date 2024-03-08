import REACTLOGO from '../../images/fbda075dea9a684fc51aaeddbc7790ef.jpg'
import { ReactComponent as Locate } from '../../logos/location-pin-svgrepo-com.svg';


const Location=()=>{
    return(<div className='container'>
       <ul> 
       <li>
        <Locate/> <li>
        Ashaley-Botwe School Junction 
            </li>
        </li>

        </ul> 
     
        <div className='image-styles'>
            <h1 className='image-container'>
        <img  src={REACTLOGO} />

        <img  src={REACTLOGO} />

        <img  src={REACTLOGO} />

        <img  src={REACTLOGO} />
        
            </h1>
        </div>
    </div>)
}





export default Location;