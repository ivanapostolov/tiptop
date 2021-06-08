import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../home/Home';
import About from '../about/About';
import Product from '../product/Product';
import ContactForm from '../contact-form/ContactForm';

const Main: React.FC = () => {
   return (
      <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/about" exact component={About} />
         <Route path="/service/:product" exact component={Product} />
         <Route path="/contact-data" exact component={ContactForm} />
      </Switch>
   );
}

export default Main;