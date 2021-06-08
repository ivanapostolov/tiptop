import React, { useState } from 'react';
import FormProps from './FormProps';
import ServiceData from '../../context/models/ServiceData';
import PriceField, {PriceFieldProps} from './PriceField';
import { Link } from 'react-router-dom';

interface AreaFormProps extends FormProps {
   coefficient: number;
   discountedCoefficient?: number;
}

const AreaForm: React.FC<AreaFormProps> = ({ submit, coefficient, discountedCoefficient }) => {
   const [areaInput, setAreaInput] = useState<string>('');

   const regex = /^[1-9][0-9]*$/g;

   const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      const value = e.currentTarget.value;

      if (regex.test(value) || value === '') {
         setAreaInput(value);
      }
   }

   const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      e.preventDefault();

      const area = parseInt(areaInput);

      if (regex.test(areaInput) && !isNaN(area)) {
         const data: ServiceData = {
            discriminator: "AreaData",
            area: area,
            price: area * (discountedCoefficient ? discountedCoefficient : coefficient)
         };

         submit(data);
      }
   }

   const getPriceFieldProps = (area: number): PriceFieldProps => {
      return {
         price: area * coefficient,
         discountedPrice: discountedCoefficient ? area * discountedCoefficient : undefined
      };
   };

   return (
      <form className="sf__form">
         <div className="input-group">
            <input className="form-control" type='number' min="1" value={ areaInput } onChange={ handleInput } />
            <span className="input-group-text">m<sup>2</sup></span>
         </div>
         <PriceField { ...getPriceFieldProps(parseInt(areaInput)) } />
         <Link to='/contact-data' type="submit" className="continue btn btn-primary" onClick={() => handleSubmit}>Продължи</Link>
      </form>
   );
}

export default AreaForm;