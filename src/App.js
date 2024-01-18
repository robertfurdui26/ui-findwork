import './App.css';
import React from 'react';
import { BrowserRouter as Router ,Route ,Routes} from 'react-router-dom';
import ConstructionList from './Components/ConstructionList';
import CreateConstruction from './Components/CreateConstruction';
import Navbar from './Navbar';
import CreateWeldService from './Weld/CreateWeldService';


function App() {
  return (
    <div className="App">
<Router>
<Navbar/>

      <Routes>
        <Route path='/' element = {<ConstructionList/>} />
        <Route path='/add' element = {<CreateConstruction/>} />
        <Route path='addWeld' element = {<CreateWeldService/>} />




      </Routes>
    </Router>    </div>
  
  );
}

export default App;
