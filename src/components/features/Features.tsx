import React from 'react';
import Feature, { FeatureProps } from './Feature';
import './Features.scss';

const Features: React.FC = () => {
   const featurePropsList: FeatureProps[] = [{
         title: "Високо Качество",
         content: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
         icon: "quality"
      }, {
         title: "Бързо и лесно",
         content: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
         icon: "fast"
      }, {
         title: "Ниски цени",
         content: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
         icon: "cheap"
      }
   ];

   const features = featurePropsList.map((featureProps: FeatureProps, index: number) => 
      <Feature key={index} title={featureProps.title} icon={featureProps.icon} content={featureProps.content} />
   );
   
   return (
      <div className="ft_features">
         <div className="heading">Добре дошли при нас!</div>
         <div className="features">
            {features}
         </div>
      </div>
   );
}

export default Features;