import React from 'react';
import { ContactData } from '../../context/models/GlobalState';

const ContactDataTable: React.FC<Omit<ContactData, 'discriminator'>> = ({firstName, lastName, address, date, comment, phone}) => {
   return (
      <table className="table">
         <thead>
            <tr>
               <th scope="col">Поле</th>
               <th scope="col">Стойност</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>Име</td>
               <td>{firstName}</td>
            </tr>
            <tr>
               <td>Фамилия</td>
               <td>{lastName}</td>
            </tr>
            <tr>
               <td>Адрес</td>
               <td>{address}</td>
            </tr>
            <tr>
               <td>Дата</td>
               <td>{date}</td>
            </tr>
            <tr>
               <td>Коментар</td>
               <td>{comment}</td>
            </tr>
            <tr>
               <td>Телефон</td>
               <td>{phone}</td>
            </tr>
         </tbody>
      </table>
   );
}

export default ContactDataTable