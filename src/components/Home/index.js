import React from 'react';

import { Container, Info, ButtonNext } from './styles';

// Components
import Navbar from '../Navbar';

// Icons
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

function Home() {
  return (
   <Container>
    <Navbar />

    <Info>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Corporis ad voluptatum veniam! Magni labore ratione fugit accusantium!
      </p>

      <div className="pulse">
        <a href="/"><ArrowRightAltIcon /></a>
      </div>
      <label>Know more</label>
    </Info>

    <ButtonNext>
      <KeyboardArrowRightIcon />
    </ButtonNext>
   </Container>
  );
}

export default Home;