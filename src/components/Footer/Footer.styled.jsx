import styled from '@emotion/styled';
import { MainContainer, theme } from 'styles';

export const FooterStyled = styled.footer`
  border-top: 1px solid #d4d4d4;
  background-color: ${theme.colors.grayLighter};
  padding: 40px 20px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 50px 40px;
    justify-content: space-between;
  }
`;

export const FooterContainer = styled(MainContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 40px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Copyright = styled.p`
  font-size: 12px;
  color: #6b6b6b;
`;
