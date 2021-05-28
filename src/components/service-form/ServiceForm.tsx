import React, { useState } from 'react';
import Housemaid from './Housemaid';
import PriceField from './PriceField';
import './ServiceForm.scss';

const ServiceForm: React.FC = () => {
   const [ price, setPrice ] = useState<number>(0);

   const updatePrice = (newPrice: number) => {
      setPrice(newPrice);
   }

   return (
      <div className="sf__serviceForm">
         <div className="wrapper">
            <Housemaid updatePrice={updatePrice} />
            <PriceField price={price} />
            <button type="submit" className="btn btn-primary">Продължи</button>
         </div>
      </div>
   );
}

export default ServiceForm;