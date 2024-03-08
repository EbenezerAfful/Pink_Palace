import { Outlet } from "react-router-dom";
import NavigationBar from "./navigationbar.component";

const Navigation=()=>{
    return(<div>
       <NavigationBar/>
       <Outlet/>
    </div>)
}








export default Navigation;