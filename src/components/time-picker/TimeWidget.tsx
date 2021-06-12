import React from 'react';

interface TimeWidgetProps {
   timeString: string;
   active: boolean;
   chosen: boolean;
   pick: () => void;
}

const TimeWidget: React.FC<TimeWidgetProps> = ({ timeString, active, chosen, pick }) => {
   const handleClick = () => {
      if (active) {
         pick();
      }
   }

   return (
      <div className={`tp__TimeWidget ${chosen ? 'chosen' : ''}`} onClick={handleClick}>{ timeString }</div>
   );
}

export default TimeWidget