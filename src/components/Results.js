import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import * as api from '../utils/api';
import Loading from './Loading';
import { Player } from './Player';


function Results(props) {
  const [error, setError] = useState(null)
  const [winner, setWinner] = useState(null)
  const [loser, setLoser] = useState(null)
  const [loading, setLoading] = useState(true)
  
  function updateState(error, loading, playerOne, playerTwo) {
    setError(error)
    setWinner(playerOne)
    setLoser(playerTwo)
    setLoading(loading)
  }

  useEffect(() => {
    console.log(props)
    const players = queryString.parse(props.location.search)
    api.battle([
      players.playerOneName,
      players.playerTwoName
    ]).then((response) => {
      if (response === null) {
        setError('Error on data retrivial')
        setLoading(false)
      }
      
      updateState(null, false, response[0], response[1] )
    })
    return () => null
  }, [props])

  return loading ? 
    <Loading text='Please Wait' refresh='300' />
    : error ?
      (<div>
        <p>{error}</p>
        <Link to='/battle'>Reset</Link>
      </div>)
      :
      ( <div className='row'>
        <Player
          label='Winner'
          score={winner.score}
          profile={winner.profile}
        />
        <Player
          label='Loser'
          score={loser.score}
          profile={loser.profile}
        />
      </div>
      )
}

export default Results;