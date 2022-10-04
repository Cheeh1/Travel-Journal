import React from 'react'
import NavBar from './components/NavBar'
import MainContent from './components/MainContent'
import traveldata from './travelData'
import './App.css'

function App() {

  const travelElements = traveldata.map(item => {
    return (
      < MainContent 
        key = {item.id}
        item = {item}
      />
    )
  })

  return (
    <div className="container">
      < NavBar />
      {travelElements}
    </div>
  )
}
export default App
