import React from 'react';
import '../styles/GameDescription.css';
import arrowRightIcon from '../assets/icons/arrow-right.svg';

const GameDescription: React.FC = () => {
  return (
    <section className="game-description">
      <div className="description-header">
        <img src={arrowRightIcon} alt="Arrow Icon" className="description-icon" />
        <h2 className="description-title">ENREDO</h2>
      </div>
      <p className="description-text">
        Kratos and his son Atreus face the oncoming Norse apocalypse, Ragnarok.
      </p>
    </section>
  );
};

export default GameDescription;
