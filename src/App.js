import React, { Fragment } from 'react';
import { BrowserRouter as Router, 
   Route, Routes } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import Home from './pages/Home';
  

  
const App = () => {
  return (
    <Fragment>
      <Router>
          <Routes>
          <Route exact path='/' element={<Home/>}>
          {/* We should pass our component as element like this not as Children */}
          </Route>
          <Route path='/SearchPage' element={<SearchPage/>}>
          </Route>
        </Routes>
      </Router>
    </Fragment>
  );
};
  
export default App;

