import React from 'react';
import './Common.scss';

export interface HeadingProps {
   text: string;
}

const Heading: React.FC<HeadingProps> = ({text}) => {
   return (
      <div className="cm_heading">
         <div className="wrapper">
            {text}
         </div>
      </div>
   );
}

export default Heading;