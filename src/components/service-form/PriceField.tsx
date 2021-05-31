import React from 'react';
import './ServiceForm.scss';

interface PriceFieldProps {
   price: number;
   originalPrice?: number;
}

const PriceField: React.FC<PriceFieldProps> = ({ price, originalPrice }) => {
   const formatter = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,      
      maximumFractionDigits: 2,
   });

   const priceValue = !isNaN(price) ? price : 0;

   return (
      <div className="sf__priceField">
         <div className="text">Цена</div>
         <div className="price">
            { originalPrice !== undefined && <span className="discount text-decoration-line-through">{ formatter.format(originalPrice) }</span> }
            <div className="value">{ formatter.format(priceValue) }лв</div>
         </div>
      </div>
   );
}

export default PriceField;