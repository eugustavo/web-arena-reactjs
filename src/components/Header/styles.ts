import styled from 'styled-components';

export const Container = styled.div`
  height: 9vh;
  background: ${props => props.theme.colors.primary};
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  font-weight: bold;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`;

export const Text = styled.h1`
  font-size: 22px;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`;

export const ListItem = styled.li`
  margin-left: 15px;
  cursor: pointer;
  text-transform: uppercase;
`;
