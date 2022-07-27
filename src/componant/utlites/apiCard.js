import React from 'react'

export default function apiCard({ hamada: { urlToImage, title, description } }) {
    return (

        < div className="card" >

            <img src={urlToImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title"> {title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div >
    )
}
