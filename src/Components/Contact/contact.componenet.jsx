import './contact.styles.css'
import {ReactComponent as Instagram } from '../../logos/instagram-logo-facebook-2-svgrepo-com.svg'
import {ReactComponent as TikTok } from '../../logos/tiktok-svgrepo-com(1).svg'
import {ReactComponent as Phone } from '../../logos/phone-calling-svgrepo-com.svg'

const Contact=()=>{
    return(<div className="contact">
        <div className='contact-container'>
        <ul className='contact-styles'>
            <li>
             <a href='https://www.instagram.com/__pink_palace?igsh=dmp2enBuNmtpaWtt'> <Instagram /></a>
            </li>

            <li>
             <a href='https://www.instagram.com/__pink_palace?igsh=dmp2enBuNmtpaWtt'><TikTok/></a>
            </li>

            <li>
             <a href=''><Phone/></a>
            </li>
        </ul>
        </div>
    </div>)
}





export default Contact;