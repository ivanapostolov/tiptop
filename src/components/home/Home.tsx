import React from 'react';
import Heading from '../common/Heading';
import Catalogue from '../catalogue/Catalogue';
import Features from '../features/Features';

const Home: React.FC = () => {
   return (
      <div>
         <p style={{color: "white", backgroundColor: "#0C3E95"}} className="display-5 p-3 text-center fw-bolder m-0">Нова Ера в почистването!</p>
         <Catalogue />
         <Features />
      </div>
   );
}

export default Home;