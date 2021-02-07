import React, { Fragment } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './components/Home';

function App() {
   return (
      <Fragment>
         <div className="App">
            <Home></Home>
         </div>
      </Fragment>

   );
}

export default App;
