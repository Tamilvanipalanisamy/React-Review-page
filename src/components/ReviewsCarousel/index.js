import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewIndex: 0,
  }

  clickRightArrow = () => {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state

    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  clickLeftArrow = () => {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    const currentReview = reviewsList[activeReviewIndex]
    const {imgUrl, username, companyName, description} = currentReview

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Reviews</h1>
          <div className="review-container">
            <button
              type="button"
              className="button"
              data-testid="leftArrow"
              onClick={this.clickLeftArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow"
              />
            </button>
            <div className="reviews">
              <img src={imgUrl} alt={username} className="user-profile" />
              <p className="username">{username}</p>
              <p className="company-name">{companyName}</p>
              <p className="description">{description}</p>
            </div>
            <button
              type="button"
              className="button"
              data-testid="rightArrow"
              onClick={this.clickRightArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
                alt="right arrow"
                className="arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
