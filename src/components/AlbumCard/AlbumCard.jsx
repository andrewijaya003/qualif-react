import './AlbumCard.css'
import { Link, useHistory } from 'react-router-dom'

function AlbumCard({album, artist}) {
    const name = artist
    const history = useHistory()

    const a = () => {
        history.replace(`/album/${album.id}`)
        window.location.reload()
    }

    return(
        <div onClick={a} className="card album-card">
            <img className="card-img-top" src={album.image} alt=""/>
            <div className="card-body">
                <h3 className="card-title">
                    {album.name}
                </h3>
                <p className="card-subtitle">
                    {name}
                </p>
            </div>
        </div>
    )
}

export default AlbumCard