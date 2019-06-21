import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../utils/api';
import Loading from './Loading';

function SelectLanguage (props) {
  var languages = ['All', 'JavaScript', 'PHP', 'Java', 'CSS', 'Python', 'Go', 'Rust'];
  return (
    <ul className='languages'>
      {languages.map(function (lang) {
        return (
          <li
            style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}
            onClick={props.onSelect.bind(null, lang)}
            key={lang}>
              {lang}
          </li>
        )
      })}
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

function RepoGrid (props) {
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

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired,
}

class Popular extends Component {
  constructor(props) {
    super();
    this.state = {
      selectedLanguage: 'All',
      repos: null,
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(lang) {
    this.setState( () => {
      return {
        selectedLanguage: lang,
        repos: null
      }
    });
  api.fetchPopularRepos(lang)
    .then(repos => this.setState(() => ({ repos })));
  }
  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage} />
          {!this.state.repos
            ? <Loading />
            : <RepoGrid repos={this.state.repos} />
          }
      </div>
    )
  }
}

export default Popular;