import React from 'react';
import { useParams } from 'react-router-dom';
import ProductsData from "../../data/ProductsData";
import ProductInfo from '../product-info/ProductInfo';
import ServiceForm from '../service-form/ServiceForm';
import Heading from '../common/Heading';
import './Product.scss';
import ServiceBox from './ServiceBox';
import Inclusions from '../product-info/Inclusions';
import FAQs from '../product-info/FAQs';

const Product: React.FC = () => {
   const { product } = useParams<{product: string}>();

   const productData = ProductsData[product];

   return (
      <div className="pr__Product">
         <div className="service__heading widget">
            <ServiceBox name={productData.name} icon={productData.icon} />
         </div>
         <div className="service__content">
            <div className="form widget">
               <ServiceForm label={product} />
            </div>
            <div className="info">
               <div className="widget">
                  <Inclusions included={productData.included} />
               </div>
               <div className="widget">
                  <FAQs faqs={productData.faq} />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Product;


/*
<div>
         <ProductInfo label={product} {...productData} />{label={product} name={productData.name} duration={} icon={productData.icon} included={productData.included} faq={productData.faq} promo={productData.promo} />}
         </div>
*/