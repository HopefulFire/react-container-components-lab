import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    fetch(URL).then((response) => {
      return response.json()
    }).then((reviewsRaw) => {
      if (reviewsRaw.status === "OK") {
        this.setState({
          reviews: reviewsRaw.results
        })
      }
    })
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
