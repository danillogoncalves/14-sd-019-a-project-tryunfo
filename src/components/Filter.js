import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { onInputFilterChange, nameFilter } = this.props;
    return (
      <>
        <input
          data-testid="name-filter"
          type="text"
          name="nameFilter"
          value={ nameFilter }
          onChange={ onInputFilterChange }
        />
        <select
          data-testid="rare-filter"
        >
          <option value="todas">todas</option>
          <option value="normal">normas</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <input
          data-testid="trunfo-filter"
          type="checkbox"
        />
        <span>Super Trype Trunfo</span>
      </>
    );
  }
}

Filter.propTypes = {
  onInputFilterChange: PropTypes.func.isRequired,
  nameFilter: PropTypes.string.isRequired,
};

export default Filter;
