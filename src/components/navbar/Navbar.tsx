import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar: React.FC = () => {
   const [collapsed, setCollapsed] = useState(true);

   const toggleCollapse = () => {
      setCollapsed(!collapsed);
   }

   return (
      <nav className="nb_navbar">
         <div className="container-fluid">
            <Link className="brand" to="/">TipTop</Link>
            <button className="toggler" type="button" onClick={toggleCollapse}>
               <span></span>
            </button>
            <div className={`collapse ${collapsed ? 'd-none' : 'show'}`}>
               <div className="nav">
                  <Link className="link active" to="/">Начало</Link>
                  <Link className="link" to="/">Услуги</Link>
                  <Link className="link" to="/about">За нас</Link>
               </div>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;