import React from 'react';

const getHeaderDate = (round: number): Date => {
   const now = new Date();

   const init = new Date(now.getTime() - ((now.getDay() - 1) * 86400000));

   init.setDate(init.getDate() + (round + 1) * 7);

   return init;
}

const formatHeaderDate = (date: Date) => {
   const months = ['януари', 'февруари', 'март', 'април', 'май', 'юни', 'юли', 'август', 'септември', 'октомври', 'ноември', 'декември'];

   return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

const formatHeaderWeek = (round: number) => {
   switch(round) {
      case 0: return 'тази седмица';
      case 1: return 'сл. седмица';
      case 2: return 'след 2 седмици';
      case 3: return 'след 3 седмици';
      default: return '';
   }
}

interface HeaderProps {
   round: number;
   setRound: React.Dispatch<React.SetStateAction<number>>;
}

const Header: React.FC<HeaderProps> = ({ round, setRound }) => {
   const shiftPrev = (): void => {
      if (round > 0) {
         setRound(round - 1);
      }
   }

   const shiftNext = (): void => {
      if (round < 3) {
         setRound(round + 1);
      }
   }

   const buttonPrev = <svg className='button' viewBox='0 0 16 16' onClick={shiftPrev}>
      <path d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/>
   </svg>

   const buttonNext = <svg className='button' viewBox='0 0 16 16' onClick={shiftNext}>
      <path d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/>
   </svg>

   const title = `${formatHeaderDate(getHeaderDate(round))}, ${formatHeaderWeek(round)}`;

   return (
      <div className='dp__Header'>
         { buttonPrev }
         <div>{ title }</div>
         { buttonNext }
      </div>
   );
}

export default Header;