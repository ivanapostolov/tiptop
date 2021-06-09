import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceData from '../../context/models/ServiceData';
import FormProps from './FormProps';
import FormSubmitButton from './FormSubmitButton';
import PriceField from './PriceField';
import './ServiceForm.scss';

interface QuantityButtonProps {
   value: number;
   increment(): void;
   decrement(): void;
   singular: string;
   plural: string;
   def: string;
}

const QuantityButton: React.FC<QuantityButtonProps> = ({ value, increment, decrement, singular, plural, def}) => {
   return (
      <div className="sf__quantityButton button" role="group">
         <button type="button" className="control__btn" onClick={() => {value > 0 ? decrement() : null}}>-</button>
         <div>{value > 0 && value} {value > 0 ? (value === 1 ? singular : plural) : def}</div>
         <button type="button" className="control__btn" onClick={increment}>+</button>
      </div>
   );
}

interface WindowsFormItemProps extends QuantityButtonProps {
   title: string;
}

const WindowsFormItem: React.FC<WindowsFormItemProps> = ({title, value, increment, decrement, singular, plural}) => {
   return (
      <></>
   );
}

const WindowsForm: React.FC<FormProps> = ({ submit }) => {
   const [ smallWindows, setSmallWindows ] = useState<number>(0);
   const [ bigWindows, setBigWindows ] = useState<number>(0);
   const [ glassDoors, setGlassDoors ] = useState<number>(0);
   const [ smallWindowsBlinds, setSmallWindowsBlinds ] = useState<number>(0);
   const [ bigWindowsBlinds, setBigWindowsBlinds ] = useState<number>(0);
   const [ glassDoorsBlinds, setGlassDoorsBlinds ] = useState<number>(0);

   const price = 5 * (glassDoorsBlinds + bigWindowsBlinds + smallWindowsBlinds) + 3 * smallWindows + 6 * bigWindows + 5 * glassDoors;

   const handleSubmit = () => {
      const data: ServiceData = {
         discriminator: "WindowsData",
         small: smallWindows,
         big: bigWindows,
         doors: glassDoors,
         bigBlinds: bigWindowsBlinds,
         smallBlinds: smallWindowsBlinds,
         doorBlinds: glassDoorsBlinds,
         price: price
      };
      
      submit(data);
   }

   const validate = (): boolean => {
      return price > 0;
   }

   return (
      <form className="sf__form sf__windowsForm">
         <div className="item">
            <div className="title">
               Единични прозорци
            </div>
            <div className="content">
               <img src="/assets/icons/small-window.svg" className="icon" />
               <div className="buttons__wrapper">
                  <QuantityButton def="Прозорци" singular="прозорец" plural="прозореца" value={smallWindows} increment={() => setSmallWindows(smallWindows + 1)} decrement={() => setSmallWindows(smallWindows - 1)} />
                  <QuantityButton def="Щори" singular="щора" plural="щори" value={smallWindowsBlinds} increment={() => setSmallWindowsBlinds(smallWindowsBlinds + 1)} decrement={() => setSmallWindowsBlinds(smallWindowsBlinds - 1)} />
               </div>
            </div>
         </div>

         <div className="item">
            <div className="title">
               Двойни прозорци
            </div>
            <div className="content">
               <img src="/assets/icons/big-window.svg" className="icon" />
               <div className="buttons__wrapper">
                  <QuantityButton def="Прозорци" singular="прозорец" plural="прозореца" value={bigWindows} increment={() => setBigWindows(bigWindows + 1)} decrement={() => setBigWindows(bigWindows - 1)} />
                  <QuantityButton def="Щори" singular="щора" plural="щори" value={bigWindowsBlinds} increment={() => setBigWindowsBlinds(bigWindowsBlinds + 1)} decrement={() => setBigWindowsBlinds(bigWindowsBlinds - 1)} />
               </div>
            </div>
         </div>

         <div className="item">
            <div className="title">
               Стъклени врати
            </div>
            <div className="content">
               <img src="/assets/icons/glass-door.svg" className="icon" />
               <div className="buttons__wrapper">
                  <QuantityButton def="Врати" singular="врата" plural="врати" value={glassDoors} increment={() => setGlassDoors(glassDoors + 1)} decrement={() => setGlassDoors(glassDoors - 1)} />
                  <QuantityButton def="Щори" singular="щора" plural="щори" value={glassDoorsBlinds} increment={() => setGlassDoorsBlinds(glassDoorsBlinds + 1)} decrement={() => setGlassDoorsBlinds(glassDoorsBlinds - 1)} />
               </div>
            </div>
         </div>

         <PriceField price={ price } />

         <FormSubmitButton enabled={ validate() } submit={handleSubmit} />
      </form>
   );
}

export default WindowsForm;