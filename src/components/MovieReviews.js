import React from 'react';
import MovieReview from './MovieReview'

const MovieReviews = (props) => {
  const movieReviews = this.props.movieReviews.map((movieReview) => {
    return (
      <MovieReview
        headline={movieReview.headline}
        byline={movieReview.byline}
        link={movieReview.link.url}
        summaryShort={movieReview.summary_short}
      />
    )
  })
  return (
    <div className="review-list">
      {movieReviews}
    </div>
  )
}

export default MovieReviews;