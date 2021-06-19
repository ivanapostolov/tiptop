import React from 'react';
import './About.scss';

export enum ColorPalette {
   FIRST = 'palette--one',
   SECOND = 'palette--two'
}

interface WidgetProps {
   title: string;
   content: string;
   palette: ColorPalette;
}

const Widget: React.FC<WidgetProps> = ({ title, content, palette }) => {
   return (
      <div className={`ab__Widget ${palette}`}>
         <div className="heading">{ title }</div>
         <div className="content"> { content }</div>
      </div>
   );
}

export default Widget;