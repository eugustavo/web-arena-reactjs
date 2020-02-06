import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Container, ImageBackground, Text } from './styles';

import contactLight from '../../assets/contact-light.png';
import contactDark from '../../assets/contact-dark.png';

const Contato: React.FC = () => {
  const { title } = useContext(ThemeContext);
  
  return(
    <Container>
      { title === 'light' ?
        <ImageBackground
          src={contactDark}
          alt="Contato"
        />
      :
        <ImageBackground
          src={contactLight}
          alt="Contato"
        />
      }
      <Text>
        Contatos
      </Text>
    </Container>
  );
}

export default Contato;