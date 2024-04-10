
import { createContext } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Title from './components/Title'

import { Outlet } from 'react-router-dom'


const recyclingTypes ={
  "recyclingTypes": [
      {
          "type": "Paper",
          "number": 10
      },
      {
          "type": "Plastic",
          "number": 5
      },
      {
          "type": "Glass",
          "number": 8
      },
      {
          "type": "Metal",
          "number": 3
      }
  ]
}
export const RecyclingContext = createContext(recyclingTypes)


function App() {
  //createContext() to store the data


  return (
    <>
      <Title/>
      <RecyclingContext.Provider value={recyclingTypes}>
        <Outlet/>
      </RecyclingContext.Provider>
      <Navigation/>
    </>
  )
}

export default App
