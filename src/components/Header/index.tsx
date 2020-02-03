import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { Container, Logo, Nav, List, ListItem } from './styles';
import logo from '../../assets/arena.png';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return(
    <Container>
      <Logo>
        <img src={logo} alt="Arena" style={{ width: 40, height:40, marginRight: 10 }}/>
        ARENA
      </Logo>

      <Nav>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Jogos</ListItem>
          <ListItem>Inscrição</ListItem>
          <ListItem>Contato</ListItem>
        </List>
      </Nav>

      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor="#444"
        onColor={shade(-0.5, colors.secundary)}
        
      />
    </Container>
  );
}

export default Header;