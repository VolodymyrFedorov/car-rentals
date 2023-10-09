import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme, ButtonBase, Transition, MainContainer } from 'styles';

const visibility = visible => (visible ? 'none' : 'translate(0, -100%)');

const {
  colors,
  breakpoints: { tablet },
} = theme;

const shaded = css`
  background-color: white;
  border-bottom: 1px solid #e7e7e7;

  & > div {
    @media screen and (max-width: ${parseInt(tablet) - 0.1}px) {
      padding: 7px 0;
    }
  }

  & a[data-logo] {
    @media screen and (min-width: ${tablet}) {
      padding: 5px 0;
    }
  }

  & a:not([data-logo]) {
    font-size: 15px;
    @media screen and (min-width: ${tablet}) {
      padding: 15px 0;
    }

    &.active::after {
      bottom: -1px;
    }
  }
`;

export const PageHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;

  padding: 0 20px;
  @media screen and (min-width: ${tablet}) {
    padding: 0 40px;
  }

  background-color: transparent;
  ${props => props.shaded && shaded};

  ${Transition('transform', 'opacity')};
  transform: ${({ visible }) => visibility(visible)};
`;

export const HeaderContainer = styled(MainContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;

  @media screen and (min-width: ${tablet}) {
    padding: 0;
  }
`;

export const MenuBtn = styled(ButtonBase)`
  padding: 0;
  width: max-content;
  height: max-content;

  ${Transition('color')};

  &:hover,
  &:focus-visible {
    color: ${colors.blue};
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 50px;
`;

export const MenuCloseBtn = styled(MenuBtn)`
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 999;
`;
