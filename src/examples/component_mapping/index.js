import React from 'react'
import '../../App.css';
import map from 'lodash/map'

import ThemedComponent from './ThemedComponent'
import { componentForKey } from './componentMap'

export default () => {
  // mock api response
  const data = [
    {
      __typename: 'a',
      text: 'goat',
      style: {
        color: '#DCDCDC'
      },
      theme: 'default'
    },
    {
      __typename: 'b',
      text: 'chicken',
      style: {
        color: 'black'
      }
    },
    {
      __typename: 'c',
      text: 'llama',
      style: {
        color: '#808080',
        display: 'block'
      },
      href: 'http://localhost:3001/'
    },
    {
      __typename: 'a',
      text: 'goat',
      style: {
        color: '#DCDCDC'
      },
      theme: 'other'
    },
  ]

  // components
  const B = (props) => <button {...props}>{props.text}</button>
  const C = (props) => <a {...props}>{props.text}</a>

  // componentMap
  const componentMap = {
    'a': ThemedComponent,
    'b': B,
    'c': C
  }

  const elements = map(data, (item, index) => {
    const props = { ...item, ...{ key: index } }
    console.log(props)
    const component = componentForKey(componentMap, "__typename")(props)

    return React.createElement(component, props)
  })

  return (
    <div className="Example">
      <header className="Example-header">Component Mapping Demo</header>
      <React.Fragment>{elements}</React.Fragment>
    </div>
  )
}
