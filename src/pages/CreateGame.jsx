import * as gameService from '../services/gamesServices'
import { useNavigate } from 'react-router-dom'

export const CreateGame = () => {
  let navigate = useNavigate()

  const onCreateGame = (e) => {
    e.preventDefault()

    let form = new FormData(document.getElementById('create'))
    let [title,category,maxLevel,imageUrl,summary] = form.values()

    let game = {
      title,
      category,
      maxLevel,
      imageUrl,
      summary
    }

    if(title && category && maxLevel && imageUrl && summary !== ''){
      console.log('y');
      gameService.createGame(game)
      .then(r => navigate('/'))
    }

  }


    return (
        <section id="create-page" className="auth">
    <form onSubmit={onCreateGame} id="create">
      <div className="container">
        <h1>Create Game</h1>
        <label htmlFor="leg-title">Legendary title:</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter game title..."
        />
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          placeholder="Enter game category..."
        />
        <label htmlFor="levels">MaxLevel:</label>
        <input
          type="number"
          id="maxLevel"
          name="maxLevel"
          min={1}
          placeholder={1}
        />
        <label htmlFor="game-img">Image:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          placeholder="Upload a photo..."
        />
        <label htmlFor="summary">Summary:</label>
        <textarea name="summary" id="summary" defaultValue={""} />
        <input
          className="btn submit"
          type="submit"
          defaultValue="Create Game"
        />
      </div>
    </form>
  </section>
    )
}