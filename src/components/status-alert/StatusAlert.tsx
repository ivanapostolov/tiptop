import React, { useContext } from 'react';
import { AppContext } from '../../context/Global';
import SuccessAlert from './SuccessAlert';
import CalendarAlert from './CalendarAlert';
import FailureAlert from './FailureAlert';
import './StatusAlert.scss';

export enum Status {
   None,
   Waiting,
   Success,
   Failure,
}

interface StatusAlertProps {
   status: Status;
}

const StatusAlert: React.FC<StatusAlertProps> = ({ status }) => {
   const { state, setState } = useContext(AppContext);
   
   const renderSpinner = (): JSX.Element =>{
      return (
         <div className="spinner" role="status">
            <span>Loading...</span>
         </div>
      );
   } 

   const renderSuccess = (): JSX.Element => {
      if (state?.contactData && state.service) {
         const startDate = new Date(state.contactData.date);
         const endDate = new Date(startDate.getTime() + state.service.duration * 3600000);
         const details = state.service.name;
         const location = state.contactData.address;

         return (
            <div className="success">
               <SuccessAlert /> 
               <CalendarAlert startDate={startDate} endDate={endDate} details={details} location={location} />
            </div>
         );
      } else {
         return <></>;
      }
   }

   const render = (): JSX.Element => {
      switch(status) {
         case Status.Waiting:
            return renderSpinner();
         case Status.Success:
            return renderSuccess();
         case Status.Failure:
            return <FailureAlert />;
         default: return <></>;
      }
   }

   return (
      <div className="sa__StatusAlert">
         { render() }
      </div>
   );
}

export default StatusAlert;