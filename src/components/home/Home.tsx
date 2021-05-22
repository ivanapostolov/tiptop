import React from 'react';
import Heading from '../common/Heading';
import Catalogue from '../catalogue/Catalogue';
import Features from '../features/Features';

const Home: React.FC = () => {
   return (
      <div>
         <Heading text="1. ИЗБЕРИ УСЛУГА" />
         <Catalogue />
         <Features />
      </div>
   );
}

export default Home;