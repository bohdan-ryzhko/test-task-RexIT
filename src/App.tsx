import { FC } from 'react';
import { SliderRange } from './components/SliderRange/SliderRange';

import CrackerImage1 from "./images/cracker-calc/cracker-1.png";
import CrackerImage2 from "./images/cracker-calc/cracker-2.png";
import CrackerImage3 from "./images/cracker-calc/cracker-3.png";
import CrackerImage4 from "./images/cracker-calc/cracker-4.png";
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Hero } from './components/Hero/Hero';

const App: FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Hero />
      </Main>
      <div style={{ marginTop: 50, width: "500px" }}>
        <SliderRange
          type="beans"
          imagePath={CrackerImage1}
          currentColor="#00A651"
        />
        <SliderRange
          type="malt"
          imagePath={CrackerImage2}
          currentColor="#49743F"
        />
        <SliderRange
          type="wheat"
          imagePath={CrackerImage3}
          currentColor="#ABA000"
        />
        <SliderRange
          type="corn"
          imagePath={CrackerImage4}
          currentColor="#939393"
        />
      </div>
    </>
  )
}

export default App;
