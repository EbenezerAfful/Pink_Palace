import BasicSlider from "./basicslider";
import Advertisement from "./advertisement";
import './home.styles.css'
import HomeItems from "./homeitems";
import Info from "./info";

const Home=()=>{
    return( <div className="home">
        <BasicSlider/>
        <Advertisement/>
        <HomeItems/>
        <Info/>
    </div>    
    )
}





export default Home;