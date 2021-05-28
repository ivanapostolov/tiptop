import React from 'react';
import './ServiceForm.scss';

interface PriceFieldProps {
   price: number;
}

const PriceField: React.FC<PriceFieldProps> = ({ price }) => {
   return (
      <div className="sf__priceField">
         <div className="text">Цена</div>
         <div className="value">{ price }лв</div>
      </div>
   );
}

export default PriceField;