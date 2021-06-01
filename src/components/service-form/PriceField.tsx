import React from 'react';
import './ServiceForm.scss';

export interface PriceFieldProps {
   price: number;
   discountedPrice?: number;
};

export const formatter = new Intl.NumberFormat('en-US', {
   minimumFractionDigits: 2,      
   maximumFractionDigits: 2,
});

const PriceField: React.FC<PriceFieldProps> = ({ price, discountedPrice }) => {
   const priceBox = ( discountedPrice !== undefined ?
      <div className="discount__wrapper">
         <span className="discount text-decoration-line-through">
            { formatter.format(!isNaN(price) ? price : 0) }
         </span>
         <div className="value">
            { formatter.format(!isNaN(discountedPrice) ? discountedPrice : 0) }лв
         </div>
      </div> : <div className="value">
         { formatter.format(!isNaN(price) ? price : 0) }лв
      </div>
   );

   return (
      <div className="sf__priceField">
         <div className="text">Цена</div>
         { priceBox }
      </div>
   );
}

export default PriceField;