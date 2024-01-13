import './App.css';
import React from 'react';
import { BrowserRouter as Router ,Route ,Routes} from 'react-router-dom';
import ConstructionList from './Components/ConstructionList';


function App() {
  return (
    <div className="App">
<Router>
      <Routes>
        <Route path='/' element = {<ConstructionList/>} />


      </Routes>
    </Router>    </div>
  
  );
}

export default App;
