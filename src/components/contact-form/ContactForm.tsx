import React, { useContext, useState } from 'react';
import FormSubmitButton from './FormSubmitButton';
import './ContactForm.scss';
import { AppContext } from '../../context/Global';
import { ContactData } from '../../context/models/GlobalState';
import DatePicker, { getInitialDay } from '../date-picker/DatePicker';
import TimePicker, { getInitialHour } from '../time-picker/TimePicker';

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
   const {state, setState} = useContext(AppContext);
   
   const [ firstName, setFirstName ] = useState<string>('');
   const [ lastName, setLastName ] = useState<string>('');
   const [ address, setAddress ] = useState<string>('');
   const [ comment, setComment ] = useState<string>('');
   const [ phone, setPhone ] = useState<string>('');
   const [ day, setDay ] = useState(getInitialDay());
   const [ hour, setHour ] = useState(getInitialHour());

   //console.log(new Date(`${day} ${hour}:00`));

   const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
      switch(e.currentTarget.id) {
         case 'first_name':
            setFirstName(e.currentTarget.value);
            break;
         case 'last_name':
            setLastName(e.currentTarget.value);
            break;
         case 'address':
            setAddress(e.currentTarget.value);
            break;
         case 'comment':
            setComment(e.currentTarget.value);
            break;
         case 'phone':
            setPhone(e.currentTarget.value);
            break;
         default: break;
      }
   }

   const format = (_date: Date): string => {
      const year = _date.getFullYear();
      const month = _date.getMonth() + 1 < 10 ? `0${_date.getMonth() + 1}` : _date.getMonth() + 1;
      const day = _date.getDate() + 1 < 10 ? `0${_date.getDate() + 1}` : _date.getDate() + 1;
      return `${year}-${month}-${day}T08:30`;
   }

   const submit = () => {
      const payload: ContactData = { 
         discriminator: "ContactData", 
         firstName: firstName,
         lastName: lastName,
         address: address,
         date: `${day} ${hour}`,
         comment: comment,
         phone: phone,
      };

      if (setState !== undefined && state !== undefined) {
         setState({ type: "ADD_CONTACT_DATA", payload: payload });

         console.log(state);
      }
   }

   const validate = () => {
      return firstName !== '' && lastName !== '' && address !== '' && phone !== '';
   }

   return (
      <div className="cf__contactForm pb-3">
         <div className="heading">Информация за контакт</div>

         <form>
            <div className="form-floating mb-3">
               <input type="text" className="form-control" id="first_name" value={firstName} onChange={handleChange} placeholder="Име" />
               <label htmlFor="first_name">Име</label>
            </div>
            <div className="form-floating mb-3">
               <input type="text" className="form-control" id="last_name" value={lastName} onChange={handleChange} placeholder="Фамилия" />
               <label htmlFor="last_name">Фамилия</label>
            </div>
            <div className="form-floating mb-3">
               <input type="text" className="form-control" id="address" value={address} onChange={handleChange} placeholder="Адрес" />
               <label htmlFor="address">Адрес</label>
            </div>
            <div className="date__picker mb-3">
               <div className="title">Избери дата</div>
               <DatePicker choice={day} setChoice={setDay} />
            </div>
            {
               state?.service.label === 'housemaid' && <div className="date__picker mb-3">
                  <div className="title">Избери начален час</div>
                  <TimePicker choice={hour} setChoice={setHour} />
               </div>
            }
            <div className="form-floating mb-3">
               <textarea className="form-control" id="comment" style={{height: "100px"}} value={comment} onChange={handleChange} placeholder="Коментар" />
               <label htmlFor="comment">Коментар</label>
            </div>
            <div className="form-floating mb-3">
               <input type="tel" className="form-control" id="phone" value={phone} onChange={handleChange} placeholder="Телефон" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
               <label htmlFor="phone">Телефон</label>
            </div>

            <FormSubmitButton enabled={validate()} submit={submit} />
         </form>
      </div>
   );
}

export default ContactForm;