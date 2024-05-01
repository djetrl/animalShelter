
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Header from '../header/header';
import Footer from '../footer/footer';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import HelpToShelter from '../pages/helpToShelter/helpToShelter';
import WaitingForOwner from '../pages/waitingForOwner/waitingForOwner';
import Admin from '../pages/admin/admin';
import LuckyOnes from '../pages/luckOnes/luckyOnes';
function App() {


  return(
    <Router>
      <div>
       <Header/>
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path='/helpToShelter' element={<HelpToShelter/>}/>
          <Route path='/waitingForOwner' element={<WaitingForOwner/>}/>
          <Route path='/LuckyOnes' element={<LuckyOnes/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='*' element={<Home/>}/>
       </Routes>
       
      <Footer/>
      </div>
    </Router>

  )
}

export default App;
