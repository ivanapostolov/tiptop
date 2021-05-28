import React from 'react';
import { ProductDataModel } from '../../data/ProductsData';
import ServiceTitle from './ServiceTitle';
import Inclusions from './Inclusions';
import FAQs from './FAQs';
import ServiceForm from '../service-form/ServiceForm';

const ProductInfo: React.FC<ProductDataModel & {tag: string}> = ({ tag, name, icon, faq, included}) => {
   return (
      <div className="pi__productInfo">
         <ServiceTitle name={name} icon={icon} />
         <ServiceForm tag={tag} />
         <Inclusions included={included} />
         <FAQs faqs={faq} />
      </div>
   );
}

export default ProductInfo;