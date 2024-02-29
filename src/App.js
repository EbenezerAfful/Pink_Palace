import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home/home.component'
import BasicSlider from './Components/Home/basicslider';
const App=()=> {
  return (
    <div className="App">
   <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<BasicSlider/>}>
    </Route>
</Routes>

  
    </div>
  );
}

export default App;
