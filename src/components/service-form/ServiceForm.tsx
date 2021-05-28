import React, { useContext, useEffect, useState } from 'react';
import Housemaid from './Housemaid';
import PriceField from './PriceField';
import {AppContext} from '../../context/Global';
import './ServiceForm.scss';

interface ServiceFormProps {
   tag: string;
}

const ServiceForm: React.FC<ServiceFormProps> = ({ tag }) => {
   const {state, setState} = useContext(AppContext);

   useEffect(() => {
      console.log(state);
   }, []);

   const [ price, setPrice ] = useState<number>(0);

   const updatePrice = (newPrice: number) => {
      setPrice(newPrice);
   }

   const submit = () => {
      if (setState !== undefined && state !== undefined) {
         setState("ADD_SERVICE");
         console.log(state);
      }
   }

   const form = (() => {
      switch(tag) {
         case 'housemaid':
            return <Housemaid updatePrice={updatePrice} />;
         default:
            return null;
      }
   }) ();

   return (
      <div className="sf__serviceForm">
         <div className="wrapper">
            { form }
            <PriceField price={price} />
            <button type="submit" className="btn btn-primary" onClick={submit}>Продължи</button>
         </div>
      </div>
   );
}

export default ServiceForm;