import React, { useState } from 'react';
import './TimePicker.scss';
import TimeWidget from './TimeWidget';

interface HourData {
   timeString: string;
   active: boolean;
}

const hours: HourData[] = [{
   timeString: '08:30',
   active: true
}, {
   timeString: '13:00',
   active: true
}, {
   timeString: '17:30',
   active: true
}];

export const getInitialHour = (): string => {
   return hours[0].timeString;
}

interface TimePickerProps {
   choice: string;
   setChoice: (change: string) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({ choice, setChoice }) => {
   return (
      <div className="tp__timePicker">
         {
            hours.map(({timeString, active}, index) => <TimeWidget 
               key={index} 
               timeString={timeString} 
               active={active} 
               chosen={timeString === choice} 
               pick={() => setChoice(timeString)}
            />)
         }
      </div>
   );
}

export default TimePicker;