import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './AlbumPage.css'
import {gql, useQuery} from '@apollo/client'

function AlbumPage() {
    let {id} = useParams()
    const [favorite, setFavorite] = useState(false)
    const [check, setCheck] = useState(false)

    const ALBUM_QUERY = gql`
        query GetAlbum($id : String!){
            album(id : $id){
                id
                name
                image
                tracks{
                    id
                    name
                    preview_url
                }
            }
            
        }
    `

    const {loading, error, data} = useQuery(ALBUM_QUERY, {
        variables : {
            id : id
        }
    })

    if(loading) return(<div>Loading...</div>)

    const album = data ? data.album : null
    const tracks = album ? album.tracks : null

    const checkFavorite = () =>{
        if(album){
            let favorites = JSON.parse(localStorage.getItem('favorites'))
            
            if(favorites != null){
                favorites.forEach(f => {
                    if(f.id == album.id){
                        setFavorite(true)
                    }
                });
            }
        }
    }

    if(check == false){
        checkFavorite()
        setCheck(true)
    }

    const addToFavorites = () =>{
        let favorites = JSON.parse(localStorage.getItem('favorites'))
        let items = {id : album.id, name : album.name, image : album.image}

        if(favorites == null){
            favorites = [items]
        }
        else{
            favorites.push(items)
        }
        localStorage.setItem('favorites', JSON.stringify(favorites))
        setFavorite(true)
    }

    const removeFromFavorites = ()=>{
        let favorites = JSON.parse(localStorage.getItem('favorites'))
        let items = {id : album.id, name : album.name, image : album.image}
        if(favorites == null){
            favorites = []
        }
        else{
            favorites.splice(favorites.indexOf(items), 1)
        }

        localStorage.setItem('favorites', JSON.stringify(favorites))
        setFavorite(false)
    }

    return (
        <div className="track-container">
            <img src={album.image} alt="" />
            <div className="tag-button">
                {
                    favorite === false ? (
                        <button className="button-favorite" onClick={addToFavorites}>Add To Favorite</button>
                    ) : (
                        <button className="button-remove" onClick={removeFromFavorites}>Remove From Favorite</button>
                    )
                }
            </div>
            {tracks?.map(track => {
                return(
                    <div className="outer-card">
                        <div className="card track-card">
                            <div className="card-body">
                                <div>
                                    <div className="inner-body">
                                        <h3 className="card-title">{track.name}</h3>
                                    </div>
                                    <audio src={track.preview_url} controls></audio>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default AlbumPage