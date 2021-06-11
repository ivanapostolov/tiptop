import React from 'react';

const FailureAlert: React.FC = () => {
   return (
      <div className="sa__FailureAlert" role="alert">
         <h4 className="alert-heading">Грешка!</h4>
         <p>Възникна неочаквана грешка при изпращането на Вашата поръчка.</p>
         <p className="mb-0">Ако имате допълнителни въпроси не се колебайте да ни потърсите на посоченият телефон имейл адрес.</p>
      </div>
   );
}

export default FailureAlert;