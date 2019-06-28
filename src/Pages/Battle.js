import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PlayerPreview from '../components/Helpers/PlayerPreview';
import PlayerInput from '../components/PlayerInput';

// don't judge my hook
// just trying to understand custom hooks
const usePlayerInfo = (state) => {
  const [player, setPlayer] = useState(state)
  const playerImage = useMemo(() => `https://github.com/${player}.png?size=200`, [player])

  return [player, playerImage, setPlayer]
}

function Battle({match}) {
  const [playerOne, playerOneImage, setPlayerOne] = usePlayerInfo('')
  const [playerTwo, playerTwoImage, setPlayerTwo] = usePlayerInfo('')

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