import React from 'react';
import './ServiceForm.scss';

interface PriceFieldProps {
   price: number;
}

const PriceField: React.FC<PriceFieldProps> = ({ price }) => {
   const formatter = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,      
      maximumFractionDigits: 2,
   });

   return (
      <div className="sf__priceField">
         <div className="text">Цена</div>
         <div className="value">{ formatter.format(price) }лв</div>
      </div>
   );
}

export default PriceField;