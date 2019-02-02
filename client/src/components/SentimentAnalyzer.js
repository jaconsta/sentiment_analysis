import React, {useState} from 'react'
import { Route, withRouter } from "react-router-dom"
import queryString from 'query-string'

import SearchBar from './SearchBar'
import SentimentResults from './SentimentResults'

const Title = () => <h1>Is the sentence optimistic enough?</h1>

const initialSearch = {
  text: '',
  lang: 'en'
}
// const initialSentiment = {
//   neg: 0.0,
//   neu: 0.0,
//   pos: 0.0,
//   compound: 0.0
// }

// const fetchSentiments = queries =>
//   fetch(`http://localhost:8080/sentiment?${queries}`, {mode: 'cors'})
//     .then(res => res.json())
//     .catch(err =>  new Error(err))

const SentimentAnalyzer = props => {
  const [search, setSearch] = useState(initialSearch)
  // const [sentiment, setSentiment] = useState(initialSentiment)

  // const getSentenceSentiments = async (queries) => {
  //   const sentenceSentiment = await fetchSentiments(queries)
  //   setSentiment(sentenceSentiment)
  // }

  const handleSubmit = e => {
    e.preventDefault()
    const queries = queryString.stringify(search)
    // getSentenceSentiments(queries)
    props.history.push(`/search?${queries}`)
  }

  const handleChange = field => e => {
    const value = e.target.value
    setSearch({...search, [field]: value})
  }

  const resetForm = () => {
    setSearch(initialSearch)
    // props.history.push(`/`)
  }

  const SearchBarProps = {
    handleSubmit,
    handleChange,
    search,
  }

  const SentimentResultsProps = {
    // sentiment,
    resetForm,
    search
  }

  return (
    <div>
      <Title />
      <SearchBar {...SearchBarProps}/>
      <Route path='/search' render={routeProps => <SentimentResults {...routeProps} {...SentimentResultsProps}/>} />
    </div>
  )
}

export default withRouter(SentimentAnalyzer)
