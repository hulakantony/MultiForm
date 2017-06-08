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
  isValidDate = (year, month, day) => {
    const d = new Date(year, month, day);
    if (d.getFullYear() === year && d.getMonth() === month && d.getDate() === day) {
      return true;
    }
    return false;
  };
  handleSubmit = (data) => {
    const { year, month, date } = data;
    const personBirth = new Date(+year, month - 1, +date);
    const ageDifs = Date.now() - personBirth.getTime();
    const ageDate = new Date(ageDifs);
    if (!this.isValidDate(+year, month - 1, +date)) {
      throw new SubmissionError({
        _error: 'Not correct date!'
      });
    } else if (Math.abs(ageDate.getUTCFullYear() - 1970) < 18) {
      throw new SubmissionError({
        _error: 'You are too young!'
      });
    } else {
      this.nextPage();
      window.localStorage.removeItem('formState');
    }
  }
  renderFormPage = () => {
    const { page } = this.state;
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
