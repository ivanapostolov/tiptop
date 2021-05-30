import React from 'react';
import { ProductDataModel } from '../../data/ProductsData';
import ServiceTitle from './ServiceTitle';
import Inclusions from './Inclusions';
import FAQs from './FAQs';
import ServiceForm from '../service-form/ServiceForm';

interface ProductInfoProps extends ProductDataModel {
   label: string
}

const ProductInfo: React.FC<ProductInfoProps> = ({ label, name, icon, faq, included}) => {
   return (
      <div className="pi__productInfo">
         <ServiceTitle name={name} icon={icon} />
         <ServiceForm label={label} />
         <Inclusions included={included} />
         <FAQs faqs={faq} />
      </div>
   );
}

export default ProductInfo;