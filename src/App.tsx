import { FC } from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';
import { Slide, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const App: FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <About />
      </Main>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
    </>
  )
}

export default App;
