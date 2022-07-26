import { useEffect, useState } from 'react'
import * as gameService from '../services/gamesServices'
import { Game } from './Game'

export const GamesSection = (props) => {

    let [games,setGames] = useState([])
    let [noGames , setNoGames] = useState(false)
    useEffect(() => {
        gameService.getAll()
        .then(res => setGames(res))
    },[])

    useEffect(() => {
        if(games.length === 0){
            setNoGames(false)
        } else {
            setNoGames(true)
        }
    },[games])

    return (
<section id="welcome-world">
    <div className="welcome-message">
      <h2>ALL new games are</h2>
      <h3>Only in GamesPlay</h3>
    </div>
    <img src="./images/four_slider_img01.png" alt="hero" />
    <div id="home-page">
     <h1>Latest Games</h1> 
      {/* Display div: with information about every game (if any) */}
        {noGames ? games.map(x => <Game key={x._id} {...x} />) 
        : <p className="no-articles">No games yet</p>}

     
    </div>
  </section>
    )
}