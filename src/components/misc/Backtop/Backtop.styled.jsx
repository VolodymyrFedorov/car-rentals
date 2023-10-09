import styled from '@emotion/styled';
import { ButtonBase, Transition } from 'styles';
import { calcCSSValue } from 'helpers';

const DEF_OFFSET = 15;
const DEF_SIZE = 50;
const DEF_OPACITY = 0.4;

const visibility = (offset = DEF_OFFSET, show = false) => {
  return show ? `unset` : `translate(0, calc(100% + ${offset}px))`;
};

export const BacktopBtn = styled(ButtonBase)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  position: fixed;
  bottom: ${({ offset = DEF_OFFSET }) => calcCSSValue(offset)};
  right: ${({ offset = DEF_OFFSET }) => calcCSSValue(offset)};
  z-index: 99;

  width: ${({ size = DEF_SIZE }) => calcCSSValue(size)};
  height: ${({ size = DEF_SIZE }) => calcCSSValue(size)};

  color: white;
  background-color: ${props => props.theme.colors.blue};
  border-radius: 50%;
  opacity: ${DEF_OPACITY};

  ${Transition('opacity', ' transform')};
  transform: ${({ visible, offset }) => visibility(offset, visible)};

  &:hover,
  &:focus-visible {
    opacity: 1;
  }
`;
