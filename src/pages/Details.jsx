import { useContext, useEffect, useState } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import * as gameService from '../services/gamesServices'
import {Link} from 'react-router-dom'
import { SessionContext } from '../contexts/SessionContext'

export const Details = (props) => {
  let navigate = useNavigate()
  let {user} = useContext(SessionContext)
  let userId

  if(user !== null){
    userId = user._id
  }
  
  let {gameId} = useParams()

  let [game , setGame] = useState({})
  let [addedComment, setAddedComment] = useState(false)
  let [comments,SetComments] = useState([])
  
  useEffect(() => {
    gameService.getComments(gameId)
    .then(res => SetComments(res))
  },[game , addedComment])

  
  useEffect(() => {
    gameService.getGame(gameId)
    .then(res => setGame(res))
  },[])


  const deleteGame = () => {
    gameService.deleteGame(gameId)
    .then(r => navigate('/'))
  }

  const addNewComment = (e) => {
    e.preventDefault()
    let form = new FormData(document.getElementById('form1'))
    let [comment] = form.values()

    gameService.addComment(gameId,comment)
    .then(r => setAddedComment(x => !x))
  }


    return (
        <section id="game-details">
    <h1>Game Details</h1>
    <div className="info-section">
      <div className="game-header">
        <img className="game-img" alt='imglogo' src={game.imageUrl} />
        <h1>{game.title}</h1>
        <span className="levels">MaxLevel: {game.maxLevel}</span>
        <p className="type">{game.category}</p>
      </div>
      <p className="text">
        {game.summary}
      </p>
      {/* Bonus ( for Guests and Users ) */}

      <div className="details-comments">
        <h2>Comments:</h2>
        <ul>
          {comments.length === 0
          ? <p className="no-comment">No comments.</p>
          :
          comments.map(x => <li key={x._id} className="comment"><p>{x.comment}</p></li>)
        }
        </ul>


        {/* Display paragraph: If there are no comments in the database */}
      </div>

      {/* Edit/Delete buttons ( Only for creator of this game )  */}
      {userId === game._ownerId
      ?
      <div className="buttons">
          <Link  className='button' to={`/edit/${gameId}`} >
            Edit
          </Link>

          <button className='button' onClick={deleteGame} >
            Delete
          </button>
      </div>
      : null 
      }

    </div>
    {/* Bonus */}
    {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}


      {user !== null
      ? userId !== gameId 
      ?
    <article className="create-comment">
      <label>Add new comment:</label>
      <form onSubmit={addNewComment}  
      id='form1'
      className="form">
        <textarea
          name="comment"
          placeholder="Comment......"
          defaultValue={""}
        />
        <input
          className="btn submit"
          type="submit"
          defaultValue="Add Comment"
        />
      </form>
    </article>
      : null
      : null
      }


  </section>
    )
}