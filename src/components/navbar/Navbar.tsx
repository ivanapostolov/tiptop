import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Brand from './Brand';
import './Navbar.scss';

const Navbar: React.FC = () => {
   const [collapsed, setCollapsed] = useState(true);

   const toggleCollapse = () => {
      setCollapsed(!collapsed);
   }

   return (
      <nav className="nb__navbar">
         <Link className="brand__link" to="/">
            <Brand />
         </Link>
         <button className="toggler" type="button" onClick={toggleCollapse}>
            <span />
         </button>
         <div className={`collapse ${collapsed ? 'd-none' : 'show'}`}>
            <div className="nav">
               <Link className="link" to="/">Услуги</Link>
               <Link className="link" to="/about">За нас</Link>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;