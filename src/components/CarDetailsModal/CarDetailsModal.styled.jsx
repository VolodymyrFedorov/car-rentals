import styled from '@emotion/styled';
import { Thumb, Photo } from '../CarCard/CarCard.styled';
import { ButtonPrimary, ButtonBase, Transition, theme } from 'styles';

const { tablet, desktop } = theme.breakpoints;

export const CloseBtn = styled(ButtonBase)`
  position: absolute;
  top: 12px;
  right: 12px;

  width: 24px;
  height: 24px;
  padding: 0;

  font-size: 36px;
  font-weight: 200;

  ${Transition('color')};

  &:hover,
  &:focus-visible {
    color: ${theme.colors.blue};
  }
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 25px;

  width: 80vw;
  padding: 25px;
  padding-top: 38px;

  background-color: whitesmoke;
  border-radius: 24px;

  @media screen and (min-width: ${tablet}) {
    width: 50vw;
    padding: 32px;
  }

  @media screen and (min-width: ${desktop}) {
    width: 33vw;
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ModalThumb = styled(Thumb)`
  height: 200px; //max-content;
  @media screen and (min-width: ${tablet}) {
    height: 300px;
  }
`;

export const ModalPhoto = styled(Photo)``;

export const Desc = styled.p`
  font-size: 14px;
  line-height: 1.4;
`;

export const SubTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  text-transform: capitalize;
`;

export const RentalCarBtn = styled(ButtonPrimary)`
  width: 168px;
`;
