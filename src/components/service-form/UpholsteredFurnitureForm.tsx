import React, { useState } from 'react';
import ServiceData from '../../context/models/ServiceData';
import FormProps from './FormProps';
import FormSubmitButton from './FormSubmitButton';
import PriceField from './PriceField';
import { QuantityButton } from './WindowsForm';

const UpholsteredFurnitureForm: React.FC<FormProps> = ({ submit }) => {
   const [ smallSofas, setSmallSofas ] = useState<number>(0);
   const [ bigSofas, setBigSofas ] = useState<number>(0);
   const [ cornerSofas, setCornerSofas ] = useState<number>(0);
   const [ armchairs, setArmchairs ] = useState<number>(0);
   const [ seats, setSeats ] = useState<number>(0);
   const [ stools, setStools ] = useState<number>(0);
   const [ smallMattresses, setSmallMattresses ] = useState<number>(0);
   const [ smallSidedMattresses, setSmallSidedMattresses ] = useState<number>(0);
   const [ bigMattresses, setBigMattresses ] = useState<number>(0);
   const [ bigSidedMattresses, setBigSidedMattresses ] = useState<number>(0);

   const price = (23.9 * smallSofas) + (29.9 * bigSofas) + (45.9 * cornerSofas) + (9.9 * armchairs) +
   (6.9 * seats) + (4.9 * stools) + (smallMattresses * 9.9) + (bigMattresses * 19.9) + (smallSidedMattresses * 19.9) + (bigSidedMattresses * 29.9);

   const handleSubmit = () => {
      const data: ServiceData = {
         discriminator: "UpholsteredFurnitureData",
         smallSofas :smallSofas,
         bigSofas: bigSofas,
         cornerSofas: cornerSofas,
         armchairs: armchairs,
         seats: seats,
         stools: stools,
         smallMattresses: smallMattresses,
         smallSidedMattresses: smallSidedMattresses,
         bigMattresses: bigMattresses,
         bigSidedMattresses: bigSidedMattresses,
         price: price
      };
      
      submit(data);
   }

   const validate = (): boolean => {
      return price > 0;
   }

   return (
      <form className="sf__form sf__furnitureForm">
         <div className="item">
            <div className="title">
               Мека мебел
            </div>
            <div className="content">
               <div className="buttons__wrapper">
                  <QuantityButton def="Дивани 2-ка" singular="диван 2-ка" plural="дивана 2-ка" value={smallSofas} increment={() => setSmallSofas(smallSofas + 1)} decrement={() => setSmallSofas(smallSofas - 1)} />
                  <QuantityButton def="Дивани 3-ка" singular="диван 3-ка" plural="дивана 3-ка" value={bigSofas} increment={() => setBigSofas(bigSofas + 1)} decrement={() => setBigSofas(bigSofas - 1)} />
                  <QuantityButton def="Ъглови дивани" singular="ъглов диван" plural="ъглови дивана" value={cornerSofas} increment={() => setCornerSofas(cornerSofas + 1)} decrement={() => setCornerSofas(cornerSofas - 1)} />
                  <QuantityButton def="Фотьойли" singular="фотьойл" plural="фотьойла" value={armchairs} increment={() => setArmchairs(armchairs + 1)} decrement={() => setArmchairs(armchairs - 1)} />
                  <QuantityButton def="Столове с облегалка" singular="стол с облегалка" plural="стола с облегалка" value={seats} increment={() => setSeats(seats + 1)} decrement={() => setSeats(seats - 1)} />
                  <QuantityButton def="Столове без облегалка" singular="стол без облегалка" plural="стола без облегалка" value={stools} increment={() => setStools(stools + 1)} decrement={() => setStools(stools - 1)} />
               </div>
            </div>
         </div>
         <div className="item">
            <div className="title">
               Матраци
            </div>
            <div className="content">
               <div className="buttons__wrapper">
                  <QuantityButton def="Единични еднолицеви матраци" singular="единичен еднолицев матрак" plural="единични еднолицеви матрака" value={smallMattresses} increment={() => setSmallMattresses(smallMattresses + 1)} decrement={() => setSmallMattresses(smallMattresses - 1)} />
                  <QuantityButton def="Двойни еднолицеви матраци" singular="двоен еднолицев матрак" plural="двойни еднолицеви матрака" value={bigMattresses} increment={() => setBigMattresses(bigMattresses + 1)} decrement={() => setBigMattresses(bigMattresses - 1)} />
                  <QuantityButton def="Единични двулицеви матраци" singular="единичен двулицев матрак" plural="единични двулицеви матрака" value={smallSidedMattresses} increment={() => setSmallSidedMattresses(smallSidedMattresses + 1)} decrement={() => setSmallSidedMattresses(smallSidedMattresses - 1)} />
                  <QuantityButton def="Двойни двулицеви матраци" singular="двоен двулицев матрак" plural="двойни двулицеви матрака" value={bigSidedMattresses} increment={() => setBigSidedMattresses(bigSidedMattresses + 1)} decrement={() => setBigSidedMattresses(bigSidedMattresses - 1)} />
               </div>
            </div>
         </div>

         <PriceField price={ price } />

         <FormSubmitButton enabled={ validate() } submit={handleSubmit} />
      </form>
   );
}

export default UpholsteredFurnitureForm;

