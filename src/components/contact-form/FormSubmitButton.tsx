import React from 'react';
import { Link } from 'react-router-dom';

interface FormSubmitButtonProps {
   enabled: boolean;
   submit(): void;
}

const FormSubmitButton: React.FC<FormSubmitButtonProps> = ({ enabled, submit }) => {
   const handleInvalidInput = () => {
      alert('Моля попълнете валидни данни.');
   }
   return (
      <>
         {
            enabled ? <Link to='/conformation' className="continue btn btn-primary" onClick={submit}>Продължи</Link> 
               : <div className="continue btn btn-primary" onClick={handleInvalidInput}>Продължи</div> 
         }
      </>
   );
}

export default FormSubmitButton;