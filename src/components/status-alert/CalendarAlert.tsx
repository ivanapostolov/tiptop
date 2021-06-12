import React from 'react';

interface CalendarAlertProps {
   startDate: Date;
   endDate: Date;
   details: string;
   location: string;
}

const formatGoogleDate = (date: Date): string => {
   const getTwoDigit = (digit: number): string => {
      return ("0" + digit).slice(-2);
   }

   return `${date.getFullYear()}${getTwoDigit(date.getMonth() + 1)}${getTwoDigit(date.getDate())}T${getTwoDigit(date.getHours() - 3)}${getTwoDigit(date.getMinutes())}00Z`;
}

const CalendarAlert: React.FC<CalendarAlertProps> = ({startDate, endDate, details, location}) => {
   const googleLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${formatGoogleDate(startDate)}%2F${formatGoogleDate(endDate)}&details=${details}&location=${location}&text=Почистване%20TipTop`;

   return (
      <div className="sa__CalendarAlert" role="alert">
         <h4 className="alert-heading">Календар!</h4>
         <p>Ако желаете добавете напомняне в своят календар, за да организирате времето си по най-удобният за Вас начин.</p>
         <p>Само кликнете върху предпочитаната от вас платформа.</p>
         <a className="btn btn-outline-primary" href={googleLink} target="_blank">Google Calendar</a>
      </div>
   );
}

export default CalendarAlert;