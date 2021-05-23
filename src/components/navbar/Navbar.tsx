import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar: React.FC = () => {
   const [collapsed, setCollapsed] = useState(true);

   const toggleCollapse = () => {
      setCollapsed(!collapsed);
   }

   const iconStyle = {
      backgroundImage: `url("/assets/logo/logo.svg")`
   };

   return (
      <nav className="nb_navbar">
         <div className="container-fluid">
            <Link className="brand" to="/">
            <div className="logo">
               <div className="icon" style={iconStyle} />
               <div className="text">TipTop</div>
            </div>
            </Link>
            <button className="toggler" type="button" onClick={toggleCollapse}>
               <span></span>
            </button>
            <div className={`collapse ${collapsed ? 'd-none' : 'show'}`}>
               <div className="nav">
                  <Link className="link" to="/">Услуги</Link>
                  <Link className="link" to="/about">За нас</Link>
               </div>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;