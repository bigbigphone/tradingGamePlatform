
import { Link } from 'react-router-dom'
const SingleGame = ({_id, price, place ,title,type}) => {
    return (
        <Link to={`/game/${_id}`} >
            <div className="singleGame">
                {type==="xbox" && <h3 className="xbox">{title}</h3>}
                {type==="ps" && <h3 className="ps">{title}</h3>}
                {type==="ns" && <h3 className="ns">{title}</h3>}
                <p>${price}<span>{place}</span></p>
                
            </div>
        </Link>
            );
        }
    

export default SingleGame;