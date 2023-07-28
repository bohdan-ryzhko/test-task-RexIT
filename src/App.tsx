import { FC } from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';

const App: FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <About />
      </Main>
      <Footer />
    </>
  )
}

export default App;
