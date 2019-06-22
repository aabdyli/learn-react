import React, { useState, useLayoutEffect, useRef } from 'react'
import * as api from '../utils/api'
import Loading from '../components/Loading'
import SelectLanguage from '../components/Helpers/SelectLanguage'
import RepoGrid from '../components/Helpers/RepoGrid'

function Popular() {
  const [language, setLanguage] = useState('All')
  const [repos, setRepos] = useState(null)
  const firstRun = useRef(true)

  useLayoutEffect(() => {
    if(firstRun) {
      firstRun.current = false
      const ready = document.addEventListener('load', updateLanguage(language))
      return () => document.removeEventListener('load', ready)
    }
  }, [language])

  const updateLanguage = (lang) =>{
    setLanguage(lang)
    setRepos(null)
    api.fetchPopularRepos(lang)
      .then(repos => setRepos( repos ));
  }
  return (
    <div>
      <SelectLanguage
        selectedLanguage={language}
        onSelect={updateLanguage} />
        {!repos
          ? <Loading text="Loading" refresh="200"/>
          : <RepoGrid repos={repos} />
        }
    </div>
  )
}

export default Popular;