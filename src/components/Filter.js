import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { onInputFilterChange, onSelectFilterCharge, onCheckboxFilterClick,
      nameFilter, nameFilterDisabled,
      rareFilter, rareFilterDisabled, trunfoFilter } = this.props;
    return (
      <>
        <input
          data-testid="name-filter"
          type="text"
          name="nameFilter"
          value={ nameFilter }
          disabled={ nameFilterDisabled }
          onChange={ onInputFilterChange }
        />
        <select
          data-testid="rare-filter"
          name="rareFilter"
          value={ rareFilter }
          disabled={ rareFilterDisabled }
          onChange={ onSelectFilterCharge }
        >
          <option value="todas">todas</option>
          <option value="normal">normas</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <input
          data-testid="trunfo-filter"
          type="checkbox"
          name="trunfoFilter"
          checked={ trunfoFilter }
          onChange={ onCheckboxFilterClick }
        />
        <span>Super Trype Trunfo</span>
      </>
    );
  }
}

Filter.propTypes = {
  onInputFilterChange: PropTypes.func.isRequired,
  onSelectFilterCharge: PropTypes.func.isRequired,
  onCheckboxFilterClick: PropTypes.func.isRequired,
  nameFilter: PropTypes.string.isRequired,
  nameFilterDisabled: PropTypes.bool.isRequired,
  rareFilter: PropTypes.string.isRequired,
  rareFilterDisabled: PropTypes.bool.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
};

export default Filter;
