import React, { Component } from 'react';
import './style.scss';

class ErrorPopup extends Component {
  state = {
    isVisible: true
  }
  componentDidMount() {
    this.setTimer();
  }
  componentWillUnmount() {
    clearTimeout(this._timer);
  }
  setTimer = () => {
    const { delay } = this.props;
    this._timer = setTimeout(() => {
      this.setState({ isVisible: false });
    }, delay);
  }
  render() {
    const { message } = this.props;
    const { isVisible } = this.state;
    return isVisible ?
        <div className="error__popup">
          { message }
        </div> :
        null;
  }
}
export default ErrorPopup;