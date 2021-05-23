import React from 'react';
import './Common.scss';

export interface HeadingProps {
   text: string;
}

const Heading: React.FC<HeadingProps> = ({text}) => {
   return (
      <div className="cm__heading">
         <div className="wrapper">
            {text}
         </div>
      </div>
   );
}

export default Heading;