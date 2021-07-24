import React, { useState, useEffect } from 'react'
import './ArtistPage.css'
import AlbumCard from '../../components/AlbumCard/AlbumCard'
import FavoritePage from '../FavoritePage.jsx/FavoritePage'
import { Redirect } from 'react-router-dom'

function ArtistPage() {
    let name = "Luicy Juicy"
    const [albums, setAlbums] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch(`https://spotify-rest.up.railway.app/artist?query=${encodeURI(name)}`)
        .then(res => res.json())
        .then(result => {
            console.log(result)
            setAlbums(result.data.albums)
        })
    }, [name])

    const gotoFavorite = () => {
        return Redirect("/favorite")
    }

    return (
        <div className="album-container">
            <div className="inner-album">
                <form action={`/artist/${search}`}>
                    <div className="inner-form">
                        <input id="search" type="search" placeholder="Search" name="search" className="search-bar" value={search} onChange={e=>{setSearch(e.target.value)}} />
                    </div>
                </form>
                <div>
                    <a className="button-favorite" href={`/favorite`}>Favorite</a>
                </div>
                <div className="album">
                    {albums?.map(album => {
                        return (
                            <AlbumCard album={album} artist={name} key={album.id}></AlbumCard>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ArtistPage