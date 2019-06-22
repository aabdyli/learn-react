import React from 'react'

function RepoGrid(props) {
  return (
    <ul className='popular-list'>
      {props.repos.map((repo, index) => {
        return (
          <li key={repo.name} className='popular-item'>
            <div className='popular-rank'>#{index + 1}</div>
            <ul className='space-list-item'>
              <li>
                <img 
                  src={repo.owner.avatar_url}
                  alt={'Avarat for ' + repo.owner.login}
                  className='avatar' />
              </li>
              <li><a href={repo.html_url} target='_blank' rel="noopener noreferrer">{repo.name}</a></li>
              <li><a href={repo.owner.html_url} target='_blank' rel="noopener noreferrer">@{repo.owner.login}</a></li>
              <li>{repo.stargazers_count}</li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

export default RepoGrid
