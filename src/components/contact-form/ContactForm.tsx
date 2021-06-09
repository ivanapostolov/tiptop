import React from 'react';
import FormSubmitButton from './FormSubmitButton';
import './ContactForm.scss';

const neighbourhoods = [
   'Аерогара София',
   'Американски Колеж',
   'Банишора',
   'Бели брези',
   'Бенковски',
   'Борово',
   'Ботунец',
   'Бояна',
   'Бъкстон',
   'Витоша',
   'Военна рампа',
   'Враждебна',
   'Връбница 1',
   'Връбница 2',
   'Гевгелийски',
   'Гео Милев',
   'Горна баня',
   'Горубляне',
   'Гоце Делчев',
   'Градина',
   'Гърдова глава',
   'Дианабад',
   'Долни Богров',
   'Драгалевци',
   'Дружба 1',
   'Дружба 2',
   'Дървеница',
   'Западен парк',
   'Захарна Фабрика',
   'Зона Б-18',
   'Зона Б-19',
   'Зона Б-4',
   'Зона Б-5',
   'Иван Вазов',
   'Изгрев',
   'Изток',
   'Илинден',
   'Илиянци',
   'Камбаните',
   'Карпузица',
   'Княжево',
   'Кокаляне',
   'Красна поляна',
   'Красно село',
   'Кремиковци',
   'Крива Река',
   'Кръстова вада',
   'Лагера',
   'Левски',
   'Левски В',
   'Левски Г',
   'Лозенец',
   'Люлин 1',
   'Люлин 2',
   'Люлин 3',
   'Люлин 4',
   'Люлин 5',
   'Люлин 6',
   'Люлин 7',
   'Люлин 8',
   'Люлин 9',
   'Люлин 10'
]

const ContactForm: React.FC = () => {
   return (
      <div className="cf__contactForm pb-3">
         <div className="heading">Информация за контакт</div>
         <form>
            <div className="form-floating mb-3">
               <input type="text" className="form-control" id="floatingName" placeholder="Име" />
               <label htmlFor="floatingName">Име</label>
            </div>
            <div className="form-floating mb-3">
               <input type="text" className="form-control" id="floatingFName" placeholder="Фамилия" />
               <label htmlFor="floatingFName">Фамилия</label>
            </div>
            {/*<div className="form-floating mb-3">
               <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                  { neighbourhoods.map(e => <option value={e}>{e}</option>) }
               </select>
               <label htmlFor="floatingSelect">Квартал</label>
   </div>*/}
            <div className="form-floating mb-3">
               <input type="text" className="form-control" id="floatingAddr" placeholder="Адрес" />
               <label htmlFor="floatingAddr">Адрес</label>
            </div>
            <div className="form-floating mb-3">
               <input type="datetime-local" className="form-control" id="date" />
               <label htmlFor="date">Дата на посещението</label>
            </div>
            <div className="form-floating mb-3">
               <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}} />
               <label htmlFor="floatingTextarea2">Коментар</label>
            </div>
            <div className="form-floating mb-3">
               <input type="tel" className="form-control" id="phone" placeholder="Телефон" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
               <label htmlFor="phone">Телефон</label>
            </div>

            <FormSubmitButton enabled={true} submit={() => {}} />
         </form>
      </div>
   );
}

export default ContactForm;