import React, { useState } from 'react';
import FormProps from './FormProps';
import ServiceData from '../../context/models/ServiceData';
import PriceField from './PriceField';

const CleaningForm: React.FC<FormProps> = ({ submit }) => {
   const [area, setArea] = useState<number>(0);
   const [price, setPrice] = useState<number>(0);

   const regex = /[0-9]/g;

   const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      const value = parseInt(e.currentTarget.value);
      console.log(value)
      console.log(value.toString())
      console.log(regex.test(value.toString()))
      setArea(value);

      /*if(regex.test(value.toString())) {
         console.log('passed: ' + value);
         setArea(value);
      }*/
   }

   const handleSubmit = () => {

   }

   return (
      <form className="sf__form">
         <input className="form-control" type='number' min="0" value={area} onChange={handleInput} />
         <PriceField price={price} />
         <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Продължи</button>
      </form>
   );
}

export default CleaningForm;