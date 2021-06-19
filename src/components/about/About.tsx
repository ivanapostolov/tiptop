import React from 'react';
import Widget, {ColorPalette} from './Widget';
import AboutData from '../../data/AboutData';
import './About.scss';

const About: React.FC = () => {
   return (
      <div className="ab__About">
         <div className='title'>
            За нас
         </div>
         {
            AboutData.map((element, index) => <Widget title={element.heading} content={element.content} palette={element.palette} />)
         }
      </div>
   );
}

export default About;