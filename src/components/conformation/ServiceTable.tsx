import React from 'react';
import ServiceData from '../../context/models/ServiceData'

interface ServiceTableProps {
   name: string;
   data?: ServiceData;
}

const ServiceTable: React.FC<ServiceTableProps> = ({ name, data}) => {
   const getTableBody = () => {
      switch(data?.discriminator) {
         case 'HousemaidData': 
            return (
               <tbody>
                  <tr>
                     <td>Услуга</td>
                     <td>{name}</td>
                  </tr>
                  <tr>
                     <td>План</td>
                     <td>{data.planName}</td>
                  </tr>
                  <tr>
                     <td>Цена</td>
                     <td>{data.price.toFixed(2)}</td>
                  </tr>
               </tbody>
            );
         case 'AreaData':
            return (
               <tbody>
                  <tr>
                     <td>Услуга</td>
                     <td>{name}</td>
                  </tr>
                  <tr>
                     <td>Площ</td>
                     <td>{data.area}</td>
                  </tr>
                  <tr>
                     <td>Цена</td>
                     <td>{data.price.toFixed(2)}</td>
                  </tr>
               </tbody>
            );
         case 'WindowsData':
            return (
               <tbody>
                  <tr>
                     <td>Услуга</td>
                     <td>{name}</td>
                  </tr>
                  <tr>
                     <td>Единични прозорци</td>
                     <td>{data.small}</td>
                  </tr>
                  <tr>
                     <td>Щори за единични прозорци</td>
                     <td>{data.smallBlinds}</td>
                  </tr>
                  <tr>
                     <td>Двойни прозорци</td>
                     <td>{data.big}</td>
                  </tr>
                  <tr>
                     <td>Щори за двойни прозорци</td>
                     <td>{data.bigBlinds}</td>
                  </tr>
                  <tr>
                     <td>Стъклени врати</td>
                     <td>{data.doors}</td>
                  </tr>
                  <tr>
                     <td>Щори за стъклени врати</td>
                     <td>{data.doorBlinds}</td>
                  </tr>
                  <tr>
                     <td>Цена</td>
                     <td>{ data.price.toFixed(2) }</td>
                  </tr>
               </tbody>
            );
            case 'UpholsteredFurnitureData':
               return (
                  <tbody>
                     <tr>
                        <td>Услуга</td>
                        <td>{name}</td>
                     </tr>
                     <tr>
                        <td>Дивани 2-ка</td>
                        <td>{data.smallSofas}</td>
                     </tr>
                     <tr>
                        <td>Дивани 3-ка</td>
                        <td>{data.bigSofas}</td>
                     </tr>
                     <tr>
                        <td>Ъглови дивани</td>
                        <td>{data.cornerSofas}</td>
                     </tr>
                     <tr>
                        <td>Фотьойли</td>
                        <td>{data.armchairs}</td>
                     </tr>
                     <tr>
                        <td>Столове с облегалка</td>
                        <td>{data.seats}</td>
                     </tr>
                     <tr>
                        <td>Столове без облегалка</td>
                        <td>{data.stools}</td>
                     </tr>
                     <tr>
                        <td>Единични еднолицеви матраци</td>
                        <td>{data.smallMattresses}</td>
                     </tr>
                     <tr>
                        <td>Двойни еднолицеви матраци</td>
                        <td>{data.bigMattresses}</td>
                     </tr>
                     <tr>
                        <td>Единични двулицеви матраци</td>
                        <td>{data.smallSidedMattresses}</td>
                     </tr>
                     <tr>
                        <td>Двойни двулицеви матраци</td>
                        <td>{data.bigSidedMattresses}</td>
                     </tr>
                     <tr>
                        <td>Цена</td>
                        <td>{ data.price.toFixed(2) }</td>
                     </tr>
                  </tbody>
               );
         default: <tbody></tbody>
      }
   }

   return (
      <table className="table">
         <thead>
            <tr>
               <th scope="col">Поле</th>
               <th scope="col">Стойност</th>
            </tr>
         </thead>
         { getTableBody() }
      </table>
   );
}

export default ServiceTable;