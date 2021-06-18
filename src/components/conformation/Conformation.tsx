import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/Global';
import ServiceTable from './ServiceTable';
import './Conformation.scss';
import ContactDataTable from './ContactDataTable';
import { Link } from 'react-router-dom';
import StatusAlert, { Status } from '../status-alert/StatusAlert';

const Conformation: React.FC = () => {
   const [ status, setStatus ] = useState<Status>(Status.None);

   const {state, setState} = useContext(AppContext);

   const service = state?.service;
   const contactData = state?.contactData;

   const sendRequest = async (body: any) => {
      /*'http://84.54.147.204:3000/api/order';*/
      const url = 'https://tiptop-backend.herokuapp.com/api/order';
      
      const rawResponse: Response = await fetch(url, {
         method: 'POST',
         mode: "cors",
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(body)
      });

      if (rawResponse.ok) {
         return 'Success';
      } else {
         throw 'Server Error';
      }
   }

   const submit = () => {
      setStatus(Status.Waiting);

      sendRequest(state).then(res => {
         setStatus(Status.Success);
      }).catch(err => {
         setStatus(Status.Failure);

         console.error(err);
      });
   }

   const conformation = <div className="cf__conformation">
      <div className="heading">Услуга</div>
      { service && <ServiceTable name={service.name} data={service.data} /> }
      <div className="heading">Данни за контакт</div>
      { contactData && <ContactDataTable {...contactData} /> }
      <button className="continue btn btn-primary" onClick={submit}>Изпрати</button> 
   </div>
   
   const render = status === Status.None ? conformation : <StatusAlert status={status} />
   
   return (
      <>
      { render }
      </>
   );
}

export default Conformation;