import React from 'react'

const MovieReview = (props) => {
  
    const reviewCard = (movie) => {
        return (
            <div className={'review'}>
                <h4>Title: {movie.display_title}</h4>
                <p>{movie.summary_short}</p>
                <a href={movie.link.url}>Read Review</a>
            </div>
        )
    }

    return(
        <div className={'review-list'}>
            {props.reviews === undefined ? 'no reviews' : props.reviews.map(p => reviewCard(p))}
        </div>
    )
}

export default MovieReview