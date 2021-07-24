import './AlbumCard.css'
import { Link } from 'react-router-dom'

function AlbumCard({album, artist}) {
    const name = artist
    
    return(
        <Link to={`/album/${album.id}`} className="card album-card">
            <img className="card-img-top" src={album.image} alt=""/>
            <div className="card-body">
                <h3 className="card-title">
                    {album.name}
                </h3>
                <p className="card-subtitle">
                    {name}
                </p>
            </div>
        </Link>
    )
}

export default AlbumCard