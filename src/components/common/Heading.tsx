import React from 'react';
import './Common.scss';

export interface HeadingProps {
   text: string;
}

const Heading: React.FC<HeadingProps> = ({text}) => {
   return (
      <div className="cm_heading">
         {text}
      </div>
   );
}

export default Heading;