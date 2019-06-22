import React, { useState } from 'react';

function PlayerInput(props) {
  const [username, setUsername] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    props.onSubmit(username)
  }

  const onChange = (event) => {
    setUsername(event.target.value)
  }

  return (
  <form className='column' onSubmit={onSubmit}>
      <label className='header' htmlFor='username'>{props.label}</label>
      <input
      id='username'
      placeholder='github username'
      type='text'
      value={username}
      autoComplete='off'
      onChange={onChange}
      />
      <input
      type='submit'
      className='button'
      disabled={!username}
      value='Submit'
      />
  </form>
  );
}

export default PlayerInput;