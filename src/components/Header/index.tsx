import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { FaSun, FaMoon } from 'react-icons/fa'

import { Container, Logo, Nav, List, ListItem, Text } from './styles';
import logo from '../../assets/arena.png';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return(
    <Container>
      <Logo>
        <img src={logo} alt="Arena" style={{ width: 48, height:48, marginRight: 10 }}/>
        <Text>ARENA</Text>
      </Logo>

      <Nav>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Jogos</ListItem>
          <ListItem>Contato</ListItem>
          <ListItem>Inscrição</ListItem>
        </List>
      </Nav>

      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={<FaSun size={15} style={{ marginTop: 3, marginLeft: 5}} />}
        uncheckedIcon={<FaMoon size={15} style={{ marginTop: 3, marginLeft: 10}} />}
        height={22}
        width={50}
        handleDiameter={20}
        offColor="#444444"
        onColor={shade(-0.5, colors.secundary)}
      >
      </Switch>
    </Container>
  );
}

export default Header;