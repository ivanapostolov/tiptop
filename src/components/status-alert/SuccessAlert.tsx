import React from 'react';

const SuccessAlert: React.FC = () => {
   return (
      <div className="sa__SuccessAlert" role="alert">
         <h4 className="alert-heading">Успех!</h4>
         <p>Вашата поръчка беше изпратена успешно. Очаквайте обаждане от нашият офис финално за потвърждение</p>
         <p className="mb-0">Ако имате допълнителни въпроси не се колебайте да ни потърсите на посоченият телефон или имейл адрес.</p>
      </div>
   );
}

export default SuccessAlert;