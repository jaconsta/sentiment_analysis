import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const FormContainer = styled.div`
  display: flex;
  padding-bottom: 10px;
  text-align: center;
`
const SearchInput = styled.input`
  flex-grow: 2;
  height: 20px;
  font-size: 1.4em;
`
const LangSelect = styled.select`
  margin-left: 10px;
  flex-grow: 0.2;
  height: 26px;
`
const SearchButton = styled.input`
  background-color: peru;
  font-size: 1.2em;
  color: black;
  padding: 8px 40px;
  border-radius: 10px;
  border: 0px
`

const SearchBar = props => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <FormContainer>
        <SearchInput
          placeholder="Sentence"
          type="text"
          onChange={props.handleChange('text')}
          value={props.search.text}
          required
        />
        <LangSelect value={props.search.lang} onChange={props.handleChange('lang')}>
           <option value="en">Lang - English</option>
           <option value="es">Spanish</option>
           <option value="fr">French</option>
           <option value="it">Italian</option>
        </LangSelect>
      </FormContainer>
      <FormContainer>
        <SearchButton type="submit" value="Analyze" onClick={props.resetForm}/>
      </FormContainer>
    </Form>
  )
}

export default withRouter(SearchBar)
