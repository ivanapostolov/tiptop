import React, { useContext } from 'react';
import { AppContext } from '../../context/Global';
import ServiceData from '../../context/models/ServiceData';
import './Conformation.scss';

const Conformation: React.FC = () => {
   const {state, setState} = useContext(AppContext);

   const service = state?.service;

   const renderData = (data: ServiceData) => {
      let content;
      for (const prop in data) {

      }
   }
   
   return (
      <div className="cf__conformation">
         { service && <table className="table">
            <thead>
               <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>Service</td>
                  <td>{service.name}</td>
               </tr>
               {service.data && service.data}
               <tr>
                  <td>Thornton</td>
                  <td>@fat</td>
               </tr>
            </tbody>
         </table> }
      </div>
   );
}

export default Conformation;