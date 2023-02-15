import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>WELCOME TO SIGMAT HELP CENTER</h1>
      <div className='hero-btns'>
        <Button className='btns'buttonStyle='btn--outline'buttonSize='btn--large'>
          ALL CATEGORY
        </Button>
      </div>
      </div>
  );
}

export default HeroSection;