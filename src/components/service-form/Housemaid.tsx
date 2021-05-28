import React, { useEffect } from 'react';
import './ServiceForm.scss';

interface Option {
   value: string;
   label: string;
   price: number;
};

interface HousemaidProps {
   updatePrice(newPrice: number): any;
};

const Housemaid: React.FC<HousemaidProps> = ({ updatePrice }) => {
   useEffect(() => {
      updatePrice(65);
   }, []);

   const options: Option[] = [
      {value: "once", label: "Еднократно", price: 65},
      {value: "subscription", label: "Абонамент", price: 59}
   ];

   const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
      const value = e.currentTarget.value;

      const choice = options.find(option => option.value === value);

      if (choice !== undefined) {
         updatePrice(choice.price);
      }
   };

   return (
      <form className="sf__housemaid">
         <select className="form-select form-select mb-3" onChange={handleChange}>
            {options.map((option: Option, id: number) => 
               <option key={id} value={option.value}>{option.label}</option>
            )}
         </select>
      </form>
   );
}

export default Housemaid;