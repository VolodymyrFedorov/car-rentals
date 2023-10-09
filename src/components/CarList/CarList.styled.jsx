import styled from '@emotion/styled';
import { theme } from 'styles';

export const List = styled.ul`
  width: 100%;
  display: grid;
  column-gap: 3%;
  row-gap: 50px;
  margin-bottom: 50px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, calc(94% / 3));
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(4, calc(91% / 4));
  }
`;

export const ListItem = styled.li`
  width: 100%;
`;
