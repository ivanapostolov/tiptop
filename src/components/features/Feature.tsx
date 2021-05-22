import React from 'react';
import './Features.scss';

export interface FeatureProps {
   title: string;
   content: string;
   icon: string;
}

const Feature: React.FC<FeatureProps> = ({ title, content, icon }) => {
   const iconStyle = {
      backgroundImage: `url("./assets/icons/${icon}.svg")`
   };

   return (
      <div className="ft_feature">
         <div className="icon__wrapper">
            <div style={iconStyle} className="icon" />
         </div>
         <div>
            <h2>{title}</h2>
            <p>{content}</p>
         </div>
      </div>
   );
}

export default Feature;