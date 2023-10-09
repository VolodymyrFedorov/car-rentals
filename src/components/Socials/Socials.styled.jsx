import styled from '@emotion/styled';
import { Transition, theme } from 'styles';

export const List = styled.ul`
  display: flex;
  width: max-content;
  gap: ${({ gap }) => gap};
`;

export const Link = styled.a`
  display: block;

  & svg {
    ${Transition('fill')};
    fill: #afafaf;
  }

  &:hover,
  &:focus-visible {
    & svg {
      fill: ${theme.colors.blue};
    }
  }
`;
