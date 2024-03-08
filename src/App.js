import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home/home.component'
import Navigation from './Components/Navigation/navigation.component'
import Shop from './Components/Shop/shop.component'
import Contact from './Components/Contact/contact.componenet';
import Location from './Components/Location/location.componenet';



const App=()=> {
  return (
    <div className="App">
   <Routes>
    <Route path='/' element={<Navigation/>}>
    <Route index element={<Home/>}/>
    <Route path='shop' element={<Shop/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='location' element={<Location/>}/>

    </Route>
</Routes>

  
    </div>
  );
}

export default App;
