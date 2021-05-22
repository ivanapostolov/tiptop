import React from 'react';
import { ProductDataModel } from '../../data/ProductsData';
import ServiceTitle from './ServiceTitle';
import Inclusions from './Inclusions';
import FAQs from './FAQs';

const ProductInfo: React.FC<ProductDataModel> = ({ name, icon, faq, included}) => {
   return (
      <div>
         <ServiceTitle name={name} icon={icon} />
         <Inclusions included={included} />
         <FAQs faqs={faq} />
      </div>
   );
}

export default ProductInfo;