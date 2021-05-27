import React from 'react';
import './ServiceForm.scss';
import PriceField from './PriceField';

interface Option {
   value: string;
   label: string;
};

const Housemaid: React.FC = () => {
   const options: Option[] = [
      {value: "once", label: "Еднократно"},
      {value: "subscription", label: "Абонамент"}
   ];

   let selected: string = "once";

   return (
      <form className="sf__housemaid">
         <select className="form-select form-select mb-3" defaultValue={selected}>
            {options.map((option: Option, id: number) => 
               <option key={id} value={option.value}>{option.label}</option>
            )}
         </select>
         <PriceField />
         <button type="submit" className="btn btn-primary">Продължи</button>
      </form>
   );
}

export default Housemaid;