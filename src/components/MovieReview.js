import React from 'react';

const MovieReview = (props) => {
  return (
    <div key={props.headline} className="review">
      <header>
        <a className="review-link" href={props.link}>
          {props.headline}
        </a>
        <br />
        <span className="author">
          {props.byline}
        </span>
      </header>
      <blockquote>
        {props.summaryShort}
      </blockquote>
    </div>
  )
}

export default MovieReview;