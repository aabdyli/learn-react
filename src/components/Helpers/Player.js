import React from 'react';
import Profile from './Profile';

export default function Player(props) {
  return (<div>
    <h1 className='header'>{props.label}</h1>
    <h3 style={{ textAlign: 'center' }}>Score: {props.score}</h3>
    <Profile info={props.profile} />
  </div>);
}
