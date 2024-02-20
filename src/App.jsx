import React, { useState, useReducer } from 'react'
import { todoReducer, ADD, REMOVE, DONE, EDIT } from './reducer'

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, [])
  console.log(state)
  const [inputText, setInputText] = useState('')

  const handleform = (e) => {
    e.preventDefault()
    const newdata = {
      data: inputText,
      complete: false,
      id: state.length
    }
    dispatch({ type: ADD, newdata })
  }
  return (
    <>
      <form onSubmit={handleform} className='form'>
        <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <button type='submit' disabled={inputText.length == 0}>Add</button>
      </form>
      {
        state.map((values, index) => (
          <div key={index} className='todo'>
            <h1 style={{ textDecorationLine: values.complete && 'line-through',textDecorationColor:'red'}}>{values.data}</h1>
            <div className='todobtn'>
            <button onClick={() => dispatch({ type: REMOVE, currentID: values.id })}>remove</button>
            <button onClick={() => dispatch({ type: DONE, currentID: values.id })}>complete</button>
            <button onClick={() => dispatch({ type: EDIT, currentID: values.id })}>edit</button>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default App