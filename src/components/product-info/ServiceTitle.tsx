import React from 'react';
import './ProductInfo.scss';

interface ServiceTitleProps {
   name: string;
   icon: string;
};

const ServiceTitle: React.FC<ServiceTitleProps> = ({ name, icon }) => {
   const iconStyle = {
      backgroundImage: `url("/assets/icons/${icon}.svg")`
   };

   return (
      <div className="pi__serviceTitle">
         <div className="wrapper">
            <div style={iconStyle} className="icon" />
            <div className="title">{name}</div>
         </div>
      </div>
   );
}

export default ServiceTitle;