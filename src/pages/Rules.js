import React from 'react';
import { RulesList } from '../helpers/RulesList';
import RulesItem  from '../components/RulesItem';
import '../styles/Rules.css'

function Rules() {
  return (
    <div className='rules'><h1 className='rulesTitle'>Dices rules</h1>
      <div className='rulesList'>
        {RulesList.map((rulesItem, key) => {
          return <RulesItem
          key={key} 
          image={rulesItem.image} 
          name={rulesItem.name} 
          property={rulesItem.property} 
          />;
        })}
      </div>
    </div>
  )
}

export default Rules