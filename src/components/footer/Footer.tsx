import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
   return (
      <footer className="ft_footer">
         <div className="container">
            <span className="text-muted">Place sticky footer content here.</span>
         </div>
      </footer>
   );
}

export default Footer;