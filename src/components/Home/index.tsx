import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Container, ImageBackground, Text } from './styles';

import gamelight from '../../assets/game-light.png';
import gamedark from '../../assets/game-dark.png';

const Home: React.FC = () => {
  const { title } = useContext(ThemeContext);

  return(
    <Container>
      { title === 'light' ?
        <ImageBackground
          src={gamedark}
          alt="Game"
        />
      :
        <ImageBackground
          src={gamelight}
          alt="Game"
        />
      }
      <Text>
        Algum texto impactante aqui
      </Text>
    </Container>
  );
}

export default Home;