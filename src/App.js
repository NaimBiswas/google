import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Home from './components/Pages/Home';

function App() {
   return (
      <Fragment>
         <div style={{ minHeight: '85vh' }} className="App">
            <BrowserRouter>
               <Home></Home>

            </BrowserRouter>
         </div>
         <hr />
         this is footer test
      </Fragment>

   );
}

export default App;
