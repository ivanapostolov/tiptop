import React from 'react';
import Navbar from '../navbar/Navbar';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import PhoneWidget from '../phone-widget/PhoneWidget';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App: React.FC = () => {
   return (
      <Router>
         <Navbar />
         <Main />
         <Footer />
         <PhoneWidget />
      </Router>
   );
}

export default App;