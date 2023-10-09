import styled from '@emotion/styled';
import { theme } from 'styles';

export const LogoWrapper = styled.a`
  display: flex;
  height: 30px;
  width: max-content;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    height: 45px;
  }
`;
