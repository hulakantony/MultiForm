import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FirstFormPage from '../../components/FirstFormPage';
import SecondFormPage from '../../components/SecondFormPage';
import ProgressBar from '../../components/ProgressBar';
import './style.scss';
// import ThirdFormPage from '../components/ThirdFormPage';
const { func } = PropTypes;

export default class MultiForm extends Component {
  state = {
    page: 1,
  };
  static propTypes = {
    onSubmit: func
  };
  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  }
  prevPage = () => {
    this.setState({ page: this.state.page - 1 });
  }
  renderFormPage = () => {
    const { page } = this.state;
    // const { onSubmit } = this.props;
    switch (page) {
      case 1:
        return <FirstFormPage
          onSubmit = { this.nextPage }
         />;
      case 2:
        return <SecondFormPage
          prevPage = { this.prevPage }
          onSubmit = { this.nextPage }
        />;
      // case 3:
      //   return <ThirdFormPage
      //     prevPage = { this.prevPage }
      //     onSubmit = { onSubmit }
      //   />
    }
  }
  render() {
    const { page } = this.state;
    return (
      <div className="form__wrapper">
        <h1>{ page < 3 ? 'Signup' : 'Thank you' }</h1>
        <ProgressBar width={ page * 33.3333 } />
        { this.renderFormPage() }
      </div>
    );
  }
}
