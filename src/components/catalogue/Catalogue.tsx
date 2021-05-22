import React from 'react';
import Product, { ProductProps } from './Product';
import ProductsData, { ProductDataModel } from "../../data/ProductsData";
import './Catalogue.scss';

const productPropsList: ProductProps[] = Object.entries(ProductsData).map(([key, product]: [string, ProductDataModel]) => {
   const productProps: ProductProps = {name: product.name, icon: product.icon, link: key};
   
   return productProps;
});

const Catalogue: React.FC = () => {
   const products = productPropsList.map((productProps: ProductProps, index: number) => 
      <Product key={index} name={productProps.name} icon={productProps.icon} link={productProps.link} />
   );

   return (
      <div className="ct_catalogue">
         {products}
      </div>
   );
}

export default Catalogue;