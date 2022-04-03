import React from 'react';
import './PhoneWidget.scss';

const PhoneWidget: React.FC = () => {
   const iconStyle = {
      backgroundImage: `url('https://image.flaticon.com/icons/png/512/633/633544.png')`
   };

   return (
      <a href="tel:+359-88-902-2555" className="pw__phoneWidget">
         <svg width="512" height="512" className="icon" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M470.916 336.069C439.569 336.069 408.791 331.167 379.624 321.528C365.332 316.653 347.763 321.125 339.04 330.084L281.471 373.543C214.707 337.904 173.582 296.792 138.43 230.529L180.61 174.46C191.569 163.516 195.499 147.529 190.79 132.529C181.11 103.209 176.193 72.4453 176.193 41.0853C176.194 18.4307 157.764 0 135.11 0H41.0839C18.4306 0 0 18.4307 0 41.084C0 300.751 211.25 512 470.916 512C493.569 512 512 493.569 512 470.916V377.152C511.999 354.5 493.568 336.069 470.916 336.069Z" fill="black"/>
         </svg>
      </a>
   );
}

export default PhoneWidget;