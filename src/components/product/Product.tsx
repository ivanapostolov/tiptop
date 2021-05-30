import React from 'react';
import { useParams } from 'react-router-dom';
import ProductsData from "../../data/ProductsData";
import ProductInfo from '../product-info/ProductInfo';
import ServiceForm from '../service-form/ServiceForm';
import Heading from '../common/Heading';

const Product: React.FC = () => {
   const { product } = useParams<{product: string}>();

   const productData = ProductsData[product];

   return (
      <div>
         <ProductInfo label={product} name={productData.name} icon={productData.icon} included={productData.included} faq={productData.faq} promo={productData.promo} />
      </div>
   );
}

export default Product;