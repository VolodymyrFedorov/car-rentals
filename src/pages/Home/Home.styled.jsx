import styled from '@emotion/styled';
import banner from 'images/home-bg.jpg';
import { ButtonPrimary, theme } from 'styles';

const { breakpoints: bp } = theme;

export const Container = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 24px;
  overflow: hidden;
  min-width: 280px;

  @media screen and (min-width: ${bp.tablet}) {
    height: 450px;
  }

  @media screen and (min-width: ${bp.desktop}) {
    height: 500px;
  }
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;

  @media screen and (min-width: 375px) {
    padding: 45px;
  }

  @media screen and (min-width: ${bp.desktop}) {
    padding: 60px;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  letter-spacing: -1px;
  font-weight: 900;
  width: 70%;

  @media screen and (min-width: 450px) {
    font-size: 38px;
    width: 90%;
  }

  @media screen and (min-width: 500px) {
    font-size: 38px;
    width: 70%;
  }

  @media screen and (min-width: ${bp.tablet}) {
    font-size: 56px;
    width: 60%;
  }

  @media screen and (min-width: ${bp.desktop}) {
    font-size: 60px;
    width: 40%;
  }
`;

export const Desc = styled.p`
  font-size: 16px;
  line-height: 1.2;
  width: 70%;
  margin-bottom: 20px;

  & span {
    font-weight: 900;
  }

  @media screen and (min-width: 450px) {
    font-size: 18px;
    width: 70%;
  }

  @media screen and (min-width: ${bp.tablet}) {
    font-size: 20px;
    width: 60%;
  }

  @media screen and (min-width: 1050px) {
    font-size: 24px;
    width: 40%;
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 600px;
  border-radius: 24px;
  overflow: hidden;

  background-image: linear-gradient(
      180deg,
      rgba(100 100 100 / 0.1),
      rgba(100 100 100 / 0.1)
    ),
    linear-gradient(90deg, rgba(255 255 255 / 1), transparent 60%),
    linear-gradient(270deg, rgba(255 255 255 / 0.5), transparent 10%),
    ${`url(${banner})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-origin: border-box;
`;

export const GetStartedBtn = styled(ButtonPrimary)`
  width: 150px;
  font-size: 14px;

  @media screen and (min-width: ${bp.tablet}) {
    width: 200px;
    font-size: 16px;
  }
`;
