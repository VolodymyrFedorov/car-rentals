import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from './theme';

const {
  colors,
  transition,
  breakpoints: { tablet },
} = theme;

export const Transition = (...props) => {
  return css`
    transition-property: ${props.join(',')};
    transition-duration: ${transition.duration};
    transition-timing-function: ${transition.func};
  `;
};

export const DisabledStyles = css`
  &[disabled],
  &[disabled='true'] {
    pointer-events: none;
    user-select: none;
    opacity: 0.7;
  }
`;

export const ButtonBase = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => width || '100%'};
  padding: 12px 24px;
  border-radius: 12px;

  ${DisabledStyles};
`;

export const ButtonPrimary = styled(ButtonBase)`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;

  color: ${colors.textButton};
  background-color: ${colors.bgButton};

  ${Transition('background-color')};

  &:hover,
  &:focus-visible {
    background-color: ${colors.bgButtonHover};
  }
`;

export const ButtonSecondary = styled(ButtonBase)`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;

  color: ${colors.bgButton};
  background-color: transparent;

  ${Transition('color', 'background-color')};

  &:hover,
  &:focus-visible {
    color: ${colors.bgButtonHover};
    background-color: #ececec;
  }
`;

export const PageTitle = styled.h2`
  text-align: center;
  text-transform: capitalize;
  font-size: 46px;
  margin-bottom: 60px;
`;

export const NoItemsFound = styled.p`
  font-size: 16px;
  text-align: center;
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto 0 auto;
`;

export const Section = styled.section`
  padding: 70px 20px;

  @media screen and (min-width: ${tablet}) {
    padding: 110px 40px;
  }
`;

export const MainSection = styled.main``;

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;
