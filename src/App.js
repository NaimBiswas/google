import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Home from './components/Pages/Home';

function App() {
   return (
      <Fragment>
         <div style={{ minHeight: '100vh', background: 'antiquewhite' }} className="App">
            <BrowserRouter>
               <Home></Home>

            </BrowserRouter>
         </div>
      </Fragment>

   );
}

export default App;
