import React from 'react';
import Header from './components/header/index';
import Routes from './routes';
import "./styles.css";

function App() {
  return (
    <div className="App">
       <Header/>
       <Routes/>
    </div>
  );
}

export default App;
