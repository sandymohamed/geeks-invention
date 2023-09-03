import React from 'react';
import './styles';

// -------------------------------------------------------------------------

/* eslint-disable react/prop-types */
const ClientsCard = ({ image, title, description }) => {

  return (
    <div className='card-container'>
      <div className='card-logo-container'>
        <img src={image} alt={title} />
      </div>
      <div className='card-content'>
        <p className='card-title'>{title}</p>
        <p className='card-caption'>{description}</p>
      </div>


    </div>
  )
}

export default ClientsCard