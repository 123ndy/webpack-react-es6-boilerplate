require('./styles/styles.css')

import React from 'react'

const name = 'You are home, boy'
console.log(name)

export default class Home extends React.Component {
  render() {
    return <div><p>{name}</p></div>
  }
}
