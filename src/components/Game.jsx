import {Details} from '../pages/Details'
import {Link} from 'react-router-dom'

export const Game = (props) => {

    const showDetails = () => {
        
    }

    return (
        <>
        <div className="game">
            <div className="image-wrap">
            <img src={props.imageUrl} alt='gamePicture'/>
            </div>
            <h3>{props.title}</h3>
            <div className="rating">
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            </div>
            <div className="data-buttons">
            <Link to={`/details/${props._id}`} className="btn details-btn">
                Details
            </Link>
            </div>
        </div>
        </>
    )
}