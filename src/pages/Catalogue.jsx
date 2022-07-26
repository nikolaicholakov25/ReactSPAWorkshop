import { useEffect, useState } from 'react'
import {useParams , Link} from 'react-router-dom'
import * as gameService from '../services/gamesServices'


export const Catalogue = () => {

    let [games, setGames] = useState([])

    useEffect(() => {
        gameService.getAll()
        .then(games => setGames(games))
    },[])

    return (
        <section id="catalog-page">
    <h1>All Games</h1>
    
    {/* Display div: with information about every game (if any) */}

    {  games.length > 0 ? 
    games.map(x => 
    <div className="allGames">
        <div className="allGames-info">
            <img src={x.imageUrl} alt='' />
            <h6>{x.category}</h6>
            <h2>{x.title}</h2>
            <Link  to={`/details/${x._id}`} className="details-button">
                Details
            </Link>
        </div>
    </div>) 
    :
    <h3 className="no-articles">No articles yet</h3>}
  </section>
    )
}