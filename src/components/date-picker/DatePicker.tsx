import React, { useState } from 'react';
import Header from './Header';
import DayWidget from './DayWidget';
import './DatePicker.scss';

interface DayData {
   dateString: string;
   active: boolean;
}

const getDays = (): DayData[] => {
   const now = new Date();

   const start = new Date(now.getTime() - (now.getDay() - 1) * 86400000);

   const days: DayData[] = [];

   for (let i = 0; i < 28; i++) {
      days.push({
         dateString: start.toDateString(),
         active: now.getTime() < start.getTime()
      });

      start.setDate(start.getDate() + 1);
   }

   return days;
}

const days: DayData[] = getDays();

export const getInitialDay = (): string => {
   const first = days.slice().find(day => day.active);

   return first ? first.dateString : '';
}

interface DatePickerProps {
   choice: string;
   setChoice: (change: string) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ choice, setChoice }) => {
   const [ round, setRound ] = useState<number>(0);
   
   return (
      <div className="dp__DatePicker">
         <Header round={round} setRound={setRound} />
         <div className="days__container">
            <div className={`days shift-${round}`}>
               {
                  days.map(({dateString, active}, index: number) => <DayWidget 
                     key={index} 
                     dateString={dateString} 
                     active={active} 
                     chosen={dateString === choice} 
                     pick={() => setChoice(dateString)}
                  /> )
               }
            </div>
         </div>
      </div>
   );
}

export default DatePicker;