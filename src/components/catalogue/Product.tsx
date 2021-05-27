import React from 'react';
import { Link } from 'react-router-dom';
import './Catalogue.scss';

export interface ProductProps {
   name: string;
   icon: string;
   link: string;
   promo: boolean;
}

const Product: React.FC<ProductProps> = ({ name, icon, link, promo }) => {
   const iconStyle = {
      backgroundImage: `url("/assets/icons/${icon}.svg")`
   };
   
   return (
      <Link className="ct__product" to={`/service/${link}`}>
         <div style={iconStyle} className="icon" />
         <div className="text">{ name }</div>
         {promo && <div className="promo">%</div>}
      </Link>
   );
}

export default Product;