import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>HERE IS YOUR ALL NEEDS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/adminn.png'
              text=' ADMIN'
              path='/users'
            />
            <CardItem
              src='images/support.jpeg'
              text='SUPPORT'
              path='/users'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/user.jpg'
              text='USER.'
              path='/supports'
            />
            <CardItem
              src='images/company.png'
              text='COMPANY'
              path='/sign-up'
            />
            <CardItem
            src='images/company.png'
            text='COMPANY'
            path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;