import { useEffect, useState } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import * as gameService from '../services/gamesServices'

export const EditPage = (props) => {
  let navigate = useNavigate()


    let [details , setDetails] = useState({})

    let {gameId} = useParams()
  
    useEffect(() => {
        gameService.getGame(gameId)
        .then(res => setDetails(res))
    },[])

    const editGame = (e) => {
        e.preventDefault()
        const form = document.querySelector('form')
        let data = new FormData(form)

        let newGame = {
            title: data.get('title'),
            category: data.get('category'),
            maxLevel: data.get('maxLevel'),
            imageUrl: data.get('imageUrl'),
            summary: data.get('summary'),
        }

        gameService.editGame(gameId , newGame)
        .then(res => navigate(`/details/${gameId}`))

    }


    return (
        <section id="edit-page" className="auth">
    <form id="edit">
      <div className="container">
        <h1>Edit Game</h1>
        <label htmlFor="leg-title">Legendary title:</label>
        <input type="text" id="title" name="title" defaultValue={details.title} />
        <label htmlFor="category">Category:</label>
        <input type="text" id="category" name="category" defaultValue={details.category} />
        <label htmlFor="levels">MaxLevel: </label>
        <input
          type="number"
          id="maxLevel"
          name="maxLevel"
          min={1}
          defaultValue={details.maxLevel}
        />
        <label htmlFor="game-img">Image:</label>
        <input type="text" id="imageUrl" name="imageUrl" defaultValue={details.imageUrl} />
        <label htmlFor="summary">Summary:</label>
        <textarea name="summary" id="summary" defaultValue={details.summary} />
        <input onClick={(e) => editGame(e)} className="btn submit" type="submit" defaultValue="Edit Game" />
      </div>
    </form>
  </section>

    )
}