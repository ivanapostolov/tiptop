import React, { useState } from 'react';
import FormProps from './FormProps';
import PriceField from './PriceField';
import ServiceData from '../../context/models/ServiceData';
import './ServiceForm.scss';
import { Link } from 'react-router-dom';

interface Option {
   value: string;
   label: string;
   price: number;
};

const options: Option[] = [
   {value: "subscription", label: "Абонамент", price: 59},
   {value: "once", label: "Еднократно", price: 65}
];

const HousemaidForm: React.FC<FormProps> = ({ submit }) => {
   const [ choice, setChoice] = useState<Option>(options[0]);

   const handleSelect: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
      const value = e.currentTarget.value;

      const choice = options.find(option => option.value === value);

      if (choice !== undefined) {
         setChoice(choice);
      }
   };

   const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      e.preventDefault();

      const data: ServiceData = {
         discriminator: "HousemaidData",
         plan: choice.value, 
         planName: choice.label, 
         price: choice.price
      };

      submit(data);
   };

   return (
      <form className="sf__form">
         <select className="form-select mb-3" onChange={handleSelect}>
            {options.map((option: Option, id: number) => 
               <option key={id} value={option.value}>{option.label}</option>
            )}
         </select>
         <PriceField discountedPrice={choice.price} price={choice.price + 10} />
         <Link to='/contact-data' type="submit" className="continue btn btn-primary" onClick={() => handleSubmit}>Продължи</Link>
      </form>
   );
}

export default HousemaidForm;