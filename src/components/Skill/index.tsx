
import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './style.scss';


interface SkillModel {
  name: String,
  value: number
}

const Skill = ({name, value}: SkillModel) => {
  return (
    <div className='skill'>
      <p className='skill__name'>{name}</p>
      <ProgressBar
        color='white'
        className='progress-bar'
        now={value}
      />
    </div>
  );
}

export default Skill;
