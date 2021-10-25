import React from 'react'
import { useParams} from 'react-router-dom'

import GameList from '../components/GameList'
import Filter from '../components/Filter'
export default function Home() {
  const { filter } = useParams()
  return (
    <main className="home_content">
        <h2>{filter}</h2>
        <div className="home_content2">
            <Filter />
            <GameList filter={filter} />
        </div>
        
    </main>
  )
}