import React from 'react';
import './Product.scss';

interface ServiceBoxProps {
   name: string;
   icon: string;
};

const ServiceBox: React.FC<ServiceBoxProps> = ({ name, icon }) => {
   const iconStyle = {
      backgroundImage: `url("/assets/icons/${icon}.svg")`
   };

   return (
      <div className="pr__ServiceBox">
         <img src={`/assets/icons/${icon}.svg`} alt="Logo" />
         <span className="title">{name}</span>
      </div>
   );
}

export default ServiceBox;