import React, { Component } from 'react';
import { SubmissionError } from 'redux-form';
import PropTypes from 'prop-types';
import FirstFormPage from '../../components/FirstFormPage';
import SecondFormPage from '../../components/SecondFormPage';
import ProgressBar from '../../components/ProgressBar';
import ThirdFormPage from '../../components/ThirdFormPage';
import './style.scss';

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
  handleSubmit = (data) => {
    console.log(JSON.stringify(data));
    const personBirth = new Date(+data.year, data.month - 1, +data.date);
    const ageDifs = Date.now() - personBirth.getTime();
    const ageDate = new Date(ageDifs);
    if (Math.abs(ageDate.getUTCFullYear() - 1970) >= 18) {
      this.nextPage();
    } else {
      throw new SubmissionError({
        _error: 'You are too young!'
      });
    }
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
          onSubmit = { this.handleSubmit }
        />;
      case 3:
        return <ThirdFormPage />;
    }
  }
  render() {
    const { page } = this.state;
    return (
      <div className="form__wrapper">
        <header>
          <h1>{ page < 3 ? 'Signup' : 'Thank you' }</h1>
          <ProgressBar width={ page * 33.334 } />
        </header>
        { this.renderFormPage() }
      </div>
    );
  }
}
