import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import { theme, Transition } from 'styles';

const {
  colors,
  breakpoints: { tablet },
} = theme;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: ${tablet}) {
    gap: 60px;
    flex-direction: row;
  }
`;

const underline = css`
  &::after {
    content: '';
    position: absolute;
    bottom: 10px;
    left: 0;
    display: block;
    width: 100%;
    height: 4px;
    background-color: ${colors.blue};
  }
`;

export const NavLinkStyled = styled(NavLink)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;

  font-family: inherit;
  font-weight: 500;
  font-size: 24px;
  color: inherit;
  text-transform: capitalize;

  @media screen and (min-width: ${tablet}) {
    font-size: 16px;
  }

  ${Transition('color')};

  &.active,
  &:hover,
  &:focus-visible {
    color: ${colors.blue};
  }

  &.active {
    @media screen and (min-width: ${tablet}) {
      ${underline};
    }
  }
`;
