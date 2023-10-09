import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { LoaderBar } from 'components/misc/LoaderBar/LoaderBar';
import { Backtop } from 'components/misc/Backtop/Backtop';
import { Footer } from 'components/Footer/Footer';
import { MainContainer, Section, MainSection, RootContainer } from 'styles';

export const SharedLayout = () => (
  <>
    <Header />
    <RootContainer>
      <MainSection>
        <Section>
          <MainContainer>
            <Suspense fallback={<LoaderBar />}>
              <Outlet />
            </Suspense>
          </MainContainer>
        </Section>
      </MainSection>
      <Footer />
      <Backtop />
    </RootContainer>
  </>
);
