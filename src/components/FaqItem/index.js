import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {stateChangeToShowAns: false}

  funToShowAnswer = itemDetail => {
    const {answerText} = itemDetail
    return (
      <section className="bottom-click-to-view-answer">
        <hr className="line-style" />
        <p>{answerText}</p>
      </section>
    )
  }

  clickOnToChangeState = () => {
    console.log('Change State Icon Press')
    this.setState(prevState => ({
      stateChangeToShowAns: !prevState.stateChangeToShowAns,
    }))
  }

  render() {
    const {itemDetail} = this.props
    const {questionText} = itemDetail
    const {stateChangeToShowAns} = this.state

    const showAnswerOnWeb = stateChangeToShowAns
      ? this.funToShowAnswer(itemDetail)
      : ''

    const showImageSrcAndAlt = stateChangeToShowAns
      ? {
          imgUrl:
            'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png',
          imgAlt: 'minus',
        }
      : {
          imgUrl:
            'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png',
          imgAlt: 'plus',
        }

    return (
      <li className="list-item-container">
        <section className="heading-and-extends-icon-container">
          <h1>{questionText}</h1>
          <button
            onClick={this.clickOnToChangeState}
            className="button-style"
            type="button"
          >
            <img
              className="icon-style"
              src={showImageSrcAndAlt.imgUrl}
              alt={showImageSrcAndAlt.imgAlt}
            />
          </button>
        </section>
        {showAnswerOnWeb}
      </li>
    )
  }
}
export default FaqItem
