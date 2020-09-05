import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default function App(): JSX.Element {
  const sum = (a:number, b:number):number => a + b
  return (
    <h1>
      Hello! {sum(10,5)}
    </h1>
  )
}

const root = document.getElementById('root')

ReactDOM.render(<App /> ,root)
