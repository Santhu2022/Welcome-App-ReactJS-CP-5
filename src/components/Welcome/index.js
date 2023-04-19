import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  changeSubscriptionState = () => {
    const {isSubscribed} = this.state
    this.setState(() => {
      if (isSubscribed === true) {
        return {isSubscribed: false}
      }
      return {isSubscribed: true}
    })
  }

  render() {
    const {isSubscribed} = this.state
    const text = isSubscribed ? 'Subscribed' : 'Subscribe'
    return (
      <div className="app-container">
        <h1 className="heading">Welcome</h1>
        <p className="greeting">Thank you! Happy Learning</p>
        <div className="button-container">
          <button
            className="button"
            type="submit"
            onClick={this.changeSubscriptionState}
          >
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
