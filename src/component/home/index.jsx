import React from 'react'
import Learn from './learn'
import Curations from './curations'
import Crads from './cards'
import Art from './art/index'

export default function Home() {
  return (
    <div>
        <Learn/>
        <Curations/>
        <Crads/>
        <Art/>
    </div>
  )
}
