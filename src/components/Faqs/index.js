// Write your code here.

import {Component} from 'react'

import './index.css'

import Faqitem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="app-container">
        <div className="main-container">
          <h1 className="heading"> FAQS </h1>
          <ul className="ul-list">
            {faqsList.map(eachFaq => (
              <Faqitem key={eachFaq.id} faqDetails={eachFaq} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
