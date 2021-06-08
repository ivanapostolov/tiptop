import React from 'react';
import Feature, { FeatureProps } from './Feature';
import './Features.scss';

const Features: React.FC = () => {
   const featurePropsList: FeatureProps[] = [{
         title: "Високо Качество",
         content: "Всеки един от служителите ни е преминал през обучение от фирмата",
         icon: "quality"
      }, {
         title: "Бързо и лесно",
         content: "Резервирай почистване само с няколко клика и се наслади на чист дом !",
         icon: "fast"
      }, {
         title: "Ниски цени",
         content: "Ежедневно преглеждаме конкуренцията и се стремим да ви предлагаме по-ниски цени !",
         icon: "cheap"
      }
   ];

   const features = featurePropsList.map((featureProps: FeatureProps, index: number) => 
      <Feature key={index} title={featureProps.title} icon={featureProps.icon} content={featureProps.content} />
   );
   
   return (
      <div className="ft__features">
         <div className="heading">Добре дошли при нас!</div>
         <div className="features">
            {features}
         </div>
      </div>
   );
}

export default Features;