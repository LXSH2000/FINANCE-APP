import React from 'react'
import Landing from './landing/Landing.jsx'

export default function App(){
  return <Landing onEnter={()=>alert('App shell running — integrate full app next')} />
}
