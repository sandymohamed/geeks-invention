import React from 'react';
import './styles';

/* eslint-disable react/prop-types */
const IconsCard = ({ image, title, t }) => {
  return (
    <div className='icon-card-container'  data-aos="zoom-in" data-aos-delay={100 * t}>
      <div className='icon-card-logo-container'>
        <img src={image} alt={title} />
      </div>
      <p className='icon-card-title'>{title}</p>
    </div>
  );
};

export default IconsCard;
