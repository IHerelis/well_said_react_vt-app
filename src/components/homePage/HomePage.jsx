import React from 'react';
import './HomePage.css';
import MagicQuote from '../magicQuote/MagicQuote';
import MagicBall from '../magicBall/MagicBall';


const HomePage = () => {
  return (
    <div className='home__container'>
      <section className='quotes-block'>
        <MagicQuote />
      </section>
      <section className='foresight-block'>
        <MagicBall />
      </section>
    </div>
  );
}

export default HomePage;
