import React from 'react';
import './PhoneWidget.scss';

const PhoneWidget: React.FC = () => {
   const iconStyle = {
      backgroundImage: `url('https://image.flaticon.com/icons/png/512/633/633544.png')`
   };

   return (
      <a href="tel:+359-88-902-2555" className="pw__phoneWidget">
         <div className="icon" style={iconStyle}/>
      </a>
   );
}

export default PhoneWidget;