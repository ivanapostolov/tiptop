import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
   return (
      <footer className="ft__footer footer mt-auto py-3 bg-light">
         <div className="container">
            <span className="text-muted">Copyright © 2021 "ТИП ТОП 21" Всички права запазени.</span>
         </div>
      </footer>
   );
}

export default Footer;