import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../home/Home';
import About from '../about/About';
import Product from '../product/Product';
import ContactForm from '../contact-form/ContactForm';
import Conformation from '../conformation/Conformation';

const Main: React.FC = () => {
   return (
      <div className="flex-shrink-0">
      <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/about" exact component={About} />
         <Route path="/service/:product" exact component={Product} />
         <Route path="/contact-data" exact component={ContactForm} />
         <Route path="/conformation" exact component={Conformation} />
      </Switch>
      </div>
   );
}

export default Main;