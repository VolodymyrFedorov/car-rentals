import { Link } from 'react-router-dom';

import { Banner, Title, About, GetStartedBtn, Container } from './Home.styled';

const Home = () => {
  return (
    <Container>
      <Banner>
        <About>
          <Title>Find the best rental prices</Title>
          <Link to="/catalog">
            <GetStartedBtn>Choose a car</GetStartedBtn>
          </Link>
        </About>
      </Banner>
    </Container>
  );
};

export default Home;
