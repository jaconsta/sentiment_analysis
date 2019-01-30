import React from 'react'
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

const SentimentResults = props => {
  return (
    <SentimentsContainer>
      Overall reaction
      {emotionEmoji(props.sentiment)}
      <Link to="/"><button onClick={props.resetForm}>Clear</button></Link>
    </SentimentsContainer>

  )
}

export default SentimentResults
