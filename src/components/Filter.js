import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { onInputFilterChange, nameFilter } = this.props;
    return (
      <input
        data-testid="name-filter"
        type="text"
        name="nameFilter"
        value={ nameFilter }
        onChange={ onInputFilterChange }
      />
    );
  }
}

Filter.propTypes = {
  onInputFilterChange: PropTypes.func.isRequired,
  nameFilter: PropTypes.string.isRequired,
};

export default Filter;
