import React, { useContext } from 'react';
import { AppContext } from '../../context/Global';
import ServiceTable from './ServiceTable';
import './Conformation.scss';
import ContactDataTable from './ContactDataTable';
import { Link } from 'react-router-dom';

const Conformation: React.FC = () => {
   const {state, setState} = useContext(AppContext);

   const service = state?.service;
   const contactData = state?.contactData;

   const sendRequest = async (body: any) => {
      //http://localhost:8000/api/order

      const rawResponse = await fetch('https://tiptop-backend.herokuapp.com/api/order', {
         method: 'POST',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(body)
      });
      
      const content = await rawResponse.json();
      
      console.log(content);
   }

   const submit = () => {
      sendRequest(state);

      alert("Успешно завършена поръчка");
   }
   
   return (
      <div className="cf__conformation">
         <div className="heading">Услуга</div>
         { service && <ServiceTable name={service.name} data={service.data} /> }
         <div className="heading">Данни за контакт</div>
         { contactData && <ContactDataTable {...contactData} /> }
         <Link to='/' className="continue btn btn-primary" onClick={submit}>Продължи</Link> 
      </div>
   );
}

export default Conformation;