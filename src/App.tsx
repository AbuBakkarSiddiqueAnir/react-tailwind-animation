import { useState } from 'react'
import './App.css'
import AnimationContainer from './components/container/AnimationContainer'
import Header from './components/header/Header'
import Main from './Layout/main'

function App() {

  return (
    <div className="App">
      <Header/>
      <Main>

        <AnimationContainer/>

      </Main>
    </div>
  )
}

export default App
