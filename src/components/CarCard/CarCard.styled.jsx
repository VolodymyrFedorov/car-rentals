import styled from '@emotion/styled';
import { ButtonPrimary } from 'styles';
import noImage from 'images/noimage.png';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: ${props => props.width || '100%'};
  height: 100%;
`;

export const Thumb = styled.div`
  position: relative;

  height: 25vh;
  min-height: 200px;
  border-radius: 14px;
  overflow: hidden;

  background: #e6e6e6 ${`url(${noImage})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: 1px solid #e6e6e6;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;

  background: linear-gradient(
      180deg,
      rgba(15, 18, 22, 0.6) 3%,
      rgba(18, 20, 23, 0) 30%
    ),
    transparent 50% / cover no-repeat;
`;

export const Photo = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const TitleCommon = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-transform: capitalize;
`;

export const Title = styled(TitleCommon)`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  padding-right: 11px;
`;

export const Caption = styled(TitleCommon)`
  & > span[data-model] {
    color: ${props => props.theme.colors.blue};
  }
`;

export const LearnMoreBtn = styled(ButtonPrimary)`
  margin-top: auto;
`;

export const AddToFavsWrapper = styled.div`
  position: absolute;
  top: 7px;
  right: 7px;
`;
