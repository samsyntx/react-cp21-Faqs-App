import './index.css'
import {Component} from 'react'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="main-body-bg-container">
        <div className="question-bg-container">
          <h1 className="main-heading">FAQs</h1>
          <ul className="unorder-list-items-container">
            {faqsList.map(eachItem => (
              <FaqItem key={eachItem.id} itemDetail={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
