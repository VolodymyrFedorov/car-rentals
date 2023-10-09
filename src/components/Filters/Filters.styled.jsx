import styled from '@emotion/styled';
import { ButtonPrimary, theme } from 'styles';

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 50px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    justify-content: center;
    flex-direction: row;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 18px;
  }
`;

export const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: auto;
  }
`;

export const Label = styled.span`
  color: ${props => props.theme.colors.gray};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  text-transform: capitalize;
`;

export const Group = styled.div`
  display: flex;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 300px;
  }
`;

export const SearchBtn = styled(ButtonPrimary)`
  width: 100%;
  height: 48px;
  margin: auto;
  margin-top: 20px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: max-content;
    margin: 0;
  }
`;
