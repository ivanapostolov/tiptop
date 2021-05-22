import React from 'react';
import './ProductInfo.scss';
import Inclusion from './Inclusion';

interface InclusionsProps {
   included: string[];
};

const Inclusions: React.FC<InclusionsProps> = ({ included }) => {
   return (
      <div className="pi__inclusions">
         <h2 className="heading">Какво включва?</h2>
         {
            included.map((service: string, index: number) => <Inclusion key={index} content={service} />)
         }
      </div>
   );
}

export default Inclusions;