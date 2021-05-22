import React from 'react';
import Navbar from '../navbar/Navbar';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App: React.FC = () => {
   return (
      <Router>
         <Main />
         <Footer />
      </Router>
   );
}

export default App;