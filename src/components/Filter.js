import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { onInputFilterChange } = this.props;
    return (
      <input
        data-testid="name-filter"
        type="text"
        onChange={ onInputFilterChange }
      />
    );
  }
}

Filter.propTypes = {
  onInputFilterChange: PropTypes.func.isRequired,
};

export default Filter;
