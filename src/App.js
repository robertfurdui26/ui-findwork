import './App.css';
import React from 'react';
import { BrowserRouter as Router ,Route ,Routes} from 'react-router-dom';
import ConstructionList from './Components/ConstructionList';
import CreateConstruction from './Components/CreateConstruction';
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
<Router>
<Navbar/>

      <Routes>
        <Route path='/' element = {<ConstructionList/>} />
        <Route path='/add' element = {<CreateConstruction/>} />




      </Routes>
    </Router>    </div>
  
  );
}

export default App;
