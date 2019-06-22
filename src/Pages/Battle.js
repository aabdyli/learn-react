import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PlayerPreview from '../components/Helpers/PlayerPreview';
import PlayerInput from '../components/PlayerInput';

function Battle({match}) {
  const [playerOne, setPlayerOne] = useState('')
  const playerOneImage = useMemo(() => `https://github.com/${playerOne}.png?size=200`, [playerOne] )
  const [playerTwo, setPlayerTwo] = useState('')
  const playerTwoImage = useMemo(() => `https://github.com/${playerTwo}.png?size=200`, [playerTwo] )

  return (
    <div>
      <div className='row'>
        {!playerOne &&
          <PlayerInput
            id='playerOne'
            label='Player One'
            onSubmit={setPlayerOne}
          />}
        {playerOne !== '' &&
          <PlayerPreview
            avatar={playerOneImage}
            username={playerOne}>
              <button
                className='reset'
                type='reset'
                onClick={() => setPlayerOne('')}>
                Reset
              </button>
          </PlayerPreview>
        }
        {!playerTwo &&
          <PlayerInput
            id='playerTwo'
            label='Player Two'
            onSubmit={setPlayerTwo}
          />}
        {playerTwo !== '' &&
          <PlayerPreview
            avatar={playerTwoImage}
            username={playerTwo}>
              <button
                className='reset'
                type='reset'
                onClick={() => setPlayerTwo('')}>
                Reset
              </button>
          </PlayerPreview>
        }
      </div>
      {playerOneImage && playerTwoImage &&
        <Link 
          className='button'
          to={{
            pathname: match.url + '/results',
            search: '?playerOneName=' + playerOne + '&playerTwoName=' + playerTwo,
          }}>
        Battle
        </Link>
      }
    </div>
  )
}

export default Battle;