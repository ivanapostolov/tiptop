import React from 'react';
import { Link } from 'react-router-dom';
import './Catalogue.scss';

export interface ProductProps {
   name: string;
   icon: string;
   link: string;
}

const Product: React.FC<ProductProps> = ({ name, icon, link }) => {
   const iconStyle = {
      backgroundImage: `url("/assets/icons/${icon}.svg")`
   };
   
   return (
      <Link className="ct_product" to={`/service/${link}`}>
         <div style={iconStyle} className="icon" />
         <div className="text">{ name }</div>
      </Link>
   );
}

export default Product;