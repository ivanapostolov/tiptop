import React from 'react';

const getWeekdayName = (date: Date): string => {
   const days = ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

   return days[date.getDay()];
}

export interface DayWidgetProps {
   dateString: string;
   active: boolean;
   chosen: boolean;
   pick: () => void;
}

const DayWidget: React.FC<DayWidgetProps> = ({ dateString, active, chosen, pick }) => {
   const date = new Date(dateString);

   const click = () => {
      if (active) {
         pick();
      }
   }

   return (
      <div className={`dp__Day ${active ? 'active' : ''}`} onClick={click}>
         <span className="weekday">{ getWeekdayName(date) }</span>
         <span className={`number ${chosen ? 'chosen' : ''}`}>{ date.getDate() }</span>
      </div>
   );
}

export default DayWidget;