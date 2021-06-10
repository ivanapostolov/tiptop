import React, { useContext } from 'react';
import HousemaidForm from './HousemaidForm';
import ProductsData from '../../data/ProductsData';
import { Service } from '../../context/models/GlobalState';
import { AppContext } from '../../context/Global';
import './ServiceForm.scss';
import ServiceData from '../../context/models/ServiceData';
import AreaForm from './AreaForm';
import WindowsForm from './WindowsForm';
import UpholsteredFurnitureForm from './UpholsteredFurnitureForm';

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
            return <AreaForm submit={submit} coefficient={3.5} discountedCoefficient={2.8} />
         case 'tenants':
            return <AreaForm submit={submit} coefficient={3.2} />
         case 'renovation':
            return <AreaForm submit={submit} coefficient={2.9} />
         case 'furniture':
            return <UpholsteredFurnitureForm submit={submit} />
         case 'windows':
            return <WindowsForm submit={submit} />
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