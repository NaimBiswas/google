import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Home from './components/Pages/Home';
import { Search } from '@material-ui/icons';

function App() {
   return (
      <Fragment>
         <div style={{ minHeight: '100vh', background: 'antiquewhite' }} className="App">
            <Router>
               <Switch>
                  {/* search page  */}
                  <Route path='/search' >
                     <h1>This is search page</h1>
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
