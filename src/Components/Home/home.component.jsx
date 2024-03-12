import BasicSlider from "./basicslider";
import Advertisement from "./advertisement";
import './home.styles.css'
import HomeItems from "./homeitems";

const Home=()=>{
    return( <div className="home">
        <BasicSlider/>
        <Advertisement/>
        <HomeItems/>
    </div>    
    )
}





export default Home;