import React, { useReducer } from 'react'

export default function ReducerHookExampe(props) {
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { ...state, count: state.count + 1 }
      case 'decrement':
        return { ...state, count: state.count - 1 }
      case 'reset':
        return { ...state, count: props.initialState.count }
      default:
        throw new Error()
    }
  }

  const [state, dispatch] = useReducer(reducer, props.initialState)

  return (
    <>
      <header className="Example-header">Count: {state.count}</header>
      <button onClick={() => dispatch({ type: 'increment' }) }>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset'})}>Reset</button>
    </>
  )
}
