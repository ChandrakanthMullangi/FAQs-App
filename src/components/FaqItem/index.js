// Write your code here.

import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {
    isAnswerActive: false,
  }

  onClickButton = () => {
    this.setState(prevState => ({isAnswerActive: !prevState.isAnswerActive}))
  }

  render() {
    const {isAnswerActive} = this.state

    const {faqDetails} = this.props

    const {questionText, answerText} = faqDetails

    const buttonImgUrl = isAnswerActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const buttonImgAlttext = isAnswerActive ? 'minus' : 'plus'

    return (
      <li className="faq">
        <div className="question-container">
          <h1 className="question"> {questionText} </h1>
          <button type="button" onClick={this.onClickButton} className="btn">
            <img src={buttonImgUrl} alt={buttonImgAlttext} />
          </button>
        </div>
        {isAnswerActive && (
          <div className="answer-container">
            <hr className="horizontal-line" />
            <p className="answer"> {answerText} </p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
