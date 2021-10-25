import React from 'react'

import GameList from '../components/GameList'
import Filter from '../components/Filter'
export default function Home() {
  return (
    <main className="home_content">
        <h2>All Latest Games</h2>
        <div className="home_content2">
            <Filter />
            <GameList />
        </div>
        
    </main>
  )
}