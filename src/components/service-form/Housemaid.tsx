import React, { useEffect } from 'react';
import './ServiceForm.scss';

interface Option {
   value: string;
   label: string;
};

interface HousemaidProps {
   updatePrice(newPrice: number): any;
}

const Housemaid: React.FC<HousemaidProps> = ({ updatePrice }) => {
   useEffect(() => {
      updatePrice(65);
   }, []);

   const options: Option[] = [
      {value: "once", label: "Еднократно"},
      {value: "subscription", label: "Абонамент"}
   ];

   let selected: string = "once";

   const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
      switch(e.currentTarget.value) {
         case 'once':
            updatePrice(65);
            break;
         case 'subscription':
            updatePrice(59);
            break;
      }
   }

   return (
      <form className="sf__housemaid">
         <select className="form-select form-select mb-3" onChange={handleChange} defaultValue={selected}>
            {options.map((option: Option, id: number) => 
               <option key={id} value={option.value}>{option.label}</option>
            )}
         </select>
      </form>
   );
}

export default Housemaid;