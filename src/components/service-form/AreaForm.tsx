import React, { useState } from 'react';
import FormProps from './FormProps';
import ServiceData from '../../context/models/ServiceData';
import PriceField, {PriceFieldProps} from './PriceField';
import FormSubmitButton from './FormSubmitButton';

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

   const handleSubmit = () => {
      const area = parseInt(areaInput);

      const data: ServiceData = {
         discriminator: "AreaData",
         area: area,
         price: area * (discountedCoefficient ? discountedCoefficient : coefficient)
      };

      submit(data);
   }

   const validate = (): boolean => {
      return regex.test(areaInput) && !isNaN(parseInt(areaInput));
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

         <FormSubmitButton enabled={validate()} submit={handleSubmit} />
      </form>
   );
}

export default AreaForm;