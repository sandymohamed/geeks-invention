import React from 'react';
import './styles';

// -------------------------------------------------------------------------------

const IconsCard = ({ image, title }) => {
  return (
    <div className='icon-card-container'>

      <div className='icon-card-logo-container'>
        <img src={image} alt={title} />
      </div>

        <p className='icon-card-title'>{title}</p>


    </div>
  )
}

export default IconsCard