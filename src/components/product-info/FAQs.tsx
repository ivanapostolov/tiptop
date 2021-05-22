import React from 'react';
import { QuestionModel } from '../../data/ProductsData';
import './ProductInfo.scss';
import FAQ from './FAQ';

interface FAQsProps {
   faqs: QuestionModel[]
};

const FAQs: React.FC<FAQsProps> = ({ faqs }) => {
   return (
      <div className="pi__faqs">
         <h2 className="heading">Често задавани въпроси</h2>
         {
            faqs.map((question: QuestionModel, index: number) => <FAQ key={index} question={question.question} answer={question.answer} index={index} />)
         }
      </div>
   );
}

export default FAQs;