require('./styles/styles.css')

import React from 'react'

const name = 'What are you about, boy'
console.log(name)

export default class About extends React.Component {
  render() {
    return <div><p>{name}</p></div>
  }
}
