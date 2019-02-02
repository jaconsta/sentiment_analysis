import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'
import styled from 'styled-components'

import Emoji from './Emoji'

const SentimentsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid black;
  padding-top: 20px;
`

const OptimisticResult = props => {
  return <Emoji symbol="😀" label="grinning"/>
}

const NeutralResult = props => {
  return <Emoji symbol="😐" label="neutral"/>
}

const PesimisticResult = props => {
  return <Emoji symbol="🙁" label="frowning"/>
}

const emotionEmoji = ({compound}) => {
  if (compound >= 0.05) return <OptimisticResult />
  if (compound < 0.05) return <NeutralResult />
  return <PesimisticResult />
}

const fetchSentiments = queries =>
  fetch(`http://localhost:8080/sentiment?${queries}`, {mode: 'cors'})
    .then(res => res.json())
    .catch(err =>  new Error(err))

const initialSentiment = {
  neg: 0.0,
  neu: 0.0,
  pos: 0.0,
  compound: 0.0
}

const SentimentResults = props => {
  const [sentiment, setSentiment] = useState(initialSentiment)

  const getSentenceSentiments = async (search) => {
    const queries = queryString.stringify(search)
    const sentenceSentiment = await fetchSentiments(queries)

    setSentiment(sentenceSentiment)
  }

  useEffect (() => {
    getSentenceSentiments(props.search)
  }, [props.search])

  return (
    <SentimentsContainer>
      Overall reaction
      {emotionEmoji(sentiment)}
      <Link to="/"><button onClick={props.resetForm}>Clear</button></Link>
    </SentimentsContainer>

  )
}

export default SentimentResults
