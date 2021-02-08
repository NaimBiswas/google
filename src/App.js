import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Home from './components/Pages/Home';

import SearchPage from './components/SearchPage';

function App() {
   return (
      <Fragment>
         <div style={{ minHeight: '100vh', }} className="App">
            <Router>
               <Switch>
                  {/* search page  */}
                  <Route path='/search' >
                     <SearchPage></SearchPage>
                  </Route>


                  {/* HOme  */}
                  <Route path='/' >
                     <Home></Home>
                  </Route>

               </Switch>
            </Router>

         </div>
      </Fragment>

   );
}

export default App;
