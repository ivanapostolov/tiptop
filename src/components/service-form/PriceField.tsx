import React from 'react';
import './ServiceForm.scss'

const PriceField: React.FC = () => {
   return (
      <div className="sf__priceField">
         <div className="text">Цена</div>
         <div className="value">0,00лв</div>
      </div>
   );
}

export default PriceField;