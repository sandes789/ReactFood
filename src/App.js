import React from 'react';
import './App.css';
import FoodContextProvider from './contexts/Context';
import Nav from './components/Nav';
import ResultList from './components/ResultList';

const App = () => {
  
  return(
    <div className="App">
      <header className="App-header">
        <FoodContextProvider>
          <Nav/>
          <ResultList/>
        </FoodContextProvider>
      </header>
    </div>
  )
}

export default App;
