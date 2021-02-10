import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Home from './components/Pages/Home';

import SearchPage from './components/SearchPage';

function App() {
   const [ChangeBG, setChangeBG] = useState(true)
   return (
      <Fragment>
         <div style={{
            minHeight: '100vh',
         }} className={`App ${ChangeBG ? 'dark' : 'white'}`}>
            <Router >
               < Switch >
                  {/* search page  */}
                  < Route path='/search' >
                     <SearchPage color={ChangeBG}></SearchPage>
                  </Route>


                  {/* HOme  */}
                  <Route path='/' >
                     <Home color={ChangeBG} value={setChangeBG}></Home>
                  </Route>

               </Switch>
            </Router >

         </div >
      </Fragment >

   );
}

export default App;
