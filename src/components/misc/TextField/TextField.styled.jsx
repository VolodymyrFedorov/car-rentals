import styled from '@emotion/styled';
import { ButtonBase, Transition, DisabledStyles, theme } from 'styles';

const { colors } = theme;

export const Field = styled.label`
  width: 100%;
  height: 48px;

  ${DisabledStyles};
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;

  padding: 0;
  padding-right: 30px;
  padding-left: 15px;

  font-family: inherit;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.1;
  color: ${colors.textMain};

  border: none;
  outline: none;

  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid #d4d4d4;
  background-color: ${colors.grayLighter};

  ${Transition('background-color')};

  &:focus-visible {
    background-color: ${colors.blue50};
  }

  &::placeholder {
    font-size: inherit;
    letter-spacing: inherit;
    color: ${theme.colors.gray};
    text-transform: capitalize;
  }
`;

export const ClearBtn = styled(ButtonBase)`
  position: absolute;
  top: 50%;
  right: 5px;

  height: 100%;
  width: 20px;
  padding: 0;

  color: ${colors.gray};
  background-color: transparent;
  transform: translateY(-50%);

  ${Transition('color')};

  &:focus-visible,
  &:hover {
    color: ${colors.textMain};
  }
`;
