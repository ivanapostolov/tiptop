import React, { useState } from 'react';
import FormProps from './FormProps';
import ServiceData from '../../context/models/ServiceData';
import PriceField from './PriceField';

const discountPrice = (price: number, discount: number): number => {
   return price * (1 - discount / 100);
}

interface AreaFormProps extends FormProps {
   coefficient: number;
   discount?: number;
}

const AreaForm: React.FC<AreaFormProps> = ({ submit, coefficient, discount }) => {
   const [area, setArea] = useState<string>('');
   const [price, setPrice] = useState<number>(0);

   const regex = /^[1-9][0-9]*$/g;

   const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      const value = e.currentTarget.value;

      if (regex.test(value) || value === '') {
         setArea(value);
         setPrice(parseInt(value) * coefficient);
      }
   }

   const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      e.preventDefault();

      const value = parseInt(area);

      if (regex.test(area) && !isNaN(value)) {
         const data: ServiceData = {
            discriminator: "AreaData",
            area: value,
            price: discount ? discountPrice(price, discount) : price,
         };

         submit(data);
      }
   }

   return (
      <form className="sf__form">
         <div className="input-group">
            <input className="form-control" type='number' min="0" value={area} onChange={handleInput} />
            <span className="input-group-text">m<sup>2</sup></span>
         </div>
         <PriceField price={discount ? discountPrice(price, discount) : price} originalPrice={discount ? price : undefined} />
         <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Продължи</button>
      </form>
   );
}

export default AreaForm;