import React from 'react';

import './styles.css';
import lol from '../../assets/lol.jpg';

const Jogos: React.FC = () => {
  return(
    <div className="container">

      <div className="card middle">
        <div className="front">
          <img src={lol} alt="League of Legends"/>
        </div>
        <div className="back">
          <div className="back-content middle">
            <h2>League of Legends</h2>
            <span>LOL</span>
            <div className="button">
              <button>inscrever-se</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Jogos;