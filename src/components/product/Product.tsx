import React from 'react';
import { useParams } from 'react-router-dom';
import ProductsData from "../../data/ProductsData";
import ProductInfo from '../product-info/ProductInfo';
import Catalogue from '../catalogue/Catalogue';
import Heading from '../common/Heading';

const Product: React.FC = () => {
   const { product } = useParams<{product: string}>();

   const productData = ProductsData[product];

   return (
      <div>
         <Heading text="2. ХАРАКТЕРИСТИКИ НА ОБЕКТА" />
         <Catalogue />
         <ProductInfo name={productData.name} icon={productData.icon} included={productData.included} faq={productData.faq} />
      </div>
   );
}

export default Product;