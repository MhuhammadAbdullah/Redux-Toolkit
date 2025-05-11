// src/components/Card.js
import React from 'react';

const Card = ({ title, subtitle, children }) => (
  <div className="card">
    <h3>{title}</h3>
    <p className="subtitle">{subtitle}</p>
    <div className="card-body">{children}</div>
  </div>
);

export default Card;
