import React, { Component } from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import themes from './theme-context'

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
    margin:0;
    padding:0;
  }

  body {
    background: ${props => props.theme.bodyBG || '#2ea'};
    background-image: ${props => props.theme.bgImage || '#2ea'};
    background-size: ${props => props.theme.bgSize || '#2ea'};
    background-position: ${props => props.theme.bgPosition || '#2ea'};
  }
`

const Sun = styled.div`
  background: ${props => props.theme.sunBG || '#2ea'}
  border-radius: 50%;
  box-shadow: 0 0 2.5rem 1rem #ffffff;
  bottom: 0;
  height: 8rem;
  left: 0;
  margin: auto;
  opacity: 0.9;
  position: absolute;
  right: 0;
  top: 0;
  width: 8rem;
`

const Input = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + label {
    background: #9eade6;
  }

  &:checked + label:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }
`

const Label = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  width: 4rem;
  height: 2rem;
  margin-left: 2rem;
  background: #0e6caf;
  display: block;
  border-radius: 2rem;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 1.375rem;
    height: 1.375rem;
    background: #fff;
    border-radius: 1.375rem;
    transition: 0.3s;
  }

  &:active:after {
    width: 4.125rem;
  }
`

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: themes.light
    }
    this.toggleTheme = this.toggleTheme.bind(this)
  }

  toggleTheme() {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark
    }))
  }

  render() {
    return (
      <>
        <GlobalStyles {...this.state} />
        <Input type="checkbox" id="switch" onChange={this.toggleTheme} />
        <Label htmlFor="switch">Toggle</Label>
        <Sun {...this.state} />
      </>
    )
  }
}

export default App
