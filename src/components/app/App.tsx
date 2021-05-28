import React from 'react';
import Navbar from '../navbar/Navbar';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import PhoneWidget from '../phone-widget/PhoneWidget';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { GlobalProvider } from '../../context/Global';

const App: React.FC = () => {
   return (
      <GlobalProvider>
         <Router>
            <Navbar />
            <Main />
            <Footer />
            <PhoneWidget />
         </Router>
      </GlobalProvider>
   );
}

export default App;