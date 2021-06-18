import React from 'react';
import Product, { ProductProps } from './Product';
import ProductsData, { ProductDataModel } from "../../data/ProductsData";
import './Catalogue.scss';

const productPropsList: ProductProps[] = Object.entries(ProductsData).map(([key, product]: [string, ProductDataModel]) => {
   const productProps: ProductProps = {name: product.name, icon: product.icon, promo: product.promo, link: key};
   
   return productProps;
});

const Catalogue: React.FC = () => {
   const products = productPropsList.map((productProps: ProductProps, index: number) => 
      <Product key={index} name={productProps.name} icon={productProps.icon} promo={productProps.promo} link={productProps.link} />
   );

   return (
      <div className="ct__catalogue">
         <h3>Избери услуга</h3>
         <div className="wrapper">
            { products }
         </div>
      </div>
   );
}

export default Catalogue;