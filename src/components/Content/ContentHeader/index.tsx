import React from 'react';
import './style.scss';

type ContentHeaderProps = {
  title: string
}

const ContentHeader = ({title}: ContentHeaderProps) => {
  return (
    <div>
      <p className='content-header'>{title}</p>
      <hr className='separator' />
    </div>
  );
}

export default ContentHeader;
