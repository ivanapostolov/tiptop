import React, { useContext } from 'react';
import HousemaidForm from './HousemaidForm';
import CleaningForm from './AreaForm';
import ProductsData from '../../data/ProductsData';
import { Service } from '../../context/models/GlobalState';
import { AppContext } from '../../context/Global';
import './ServiceForm.scss';
import ServiceData from '../../context/models/ServiceData';

interface ServiceFormProps {
   label: string;
}

const ServiceForm: React.FC<ServiceFormProps> = ({ label }) => {
   const {state, setState} = useContext(AppContext);

   const submit = (data: ServiceData) => {
      const payload: Service = { 
         discriminator: "Service", 
         label: label, 
         name: ProductsData[label].name, 
         data: data
      };

      if (setState !== undefined && state !== undefined) {
         setState({ type: "ADD_SERVICE", payload: payload });

         console.log(state);
      }
   }

   const form = (() => {
      switch(label) {
         case 'housemaid':
            return <HousemaidForm submit={submit} />;
         case 'cleaning':
            return <CleaningForm submit={submit} coefficient={2.6} discount={13.33333} />
         default:
            return null;
      }
   }) ();

   return (
      <div className="sf__serviceForm">
         { form }
      </div>
   );
}

export default ServiceForm;