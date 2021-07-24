import React, { useState, useEffect } from 'react'
import './FavoritePage.css'
import AlbumCard from '../../components/AlbumCard/AlbumCard'
import { useParams } from 'react-router-dom'

function FavoritePage() {
    let {name} = useParams()
    let favorites = JSON.parse(localStorage.getItem('favorites'))

    return (
        <div className="album-container">
            <div className="inner-album">
                <br />
                {
                    name === null ? (
                        <div>
                            <a className="button-favorite" href={`/artist/${name}`}>Back</a>
                        </div>
                    ) : (
                        <div>
                            <a className="button-favorite" href={`/artist`}>Back</a>
                        </div>
                    )
                }
                <div className="album">
                    {favorites?.map(favorite => {
                        return (
                            <AlbumCard album={favorite} artist={favorite.name} key={favorite.id}></AlbumCard>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default FavoritePage