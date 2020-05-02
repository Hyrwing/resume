import React from 'react';
import './style.scss';

type ContentBodyProps = {
  title: string,
  date: string,
  description: string
}

const ContentBody = ({title, date, description}: ContentBodyProps) => {
  return (
    <div className='content-body'>
      <p className='title'>{title}</p>
      <p className='description date'>{date}</p>
      <p className='description text'>{description}</p>
    </div>
  );
}

export default ContentBody;
