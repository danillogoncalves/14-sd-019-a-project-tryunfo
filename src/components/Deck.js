import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Deck extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      onDeleteButtonClick,
    } = this.props;
    return (
      <section>
        <div>
          <span
            data-testid="name-card"
          >
            { cardName }
          </span>
        </div>
        <div>
          <img
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
          />
        </div>
        <div>
          <span
            data-testid="description-card"
          >
            {cardDescription}
          </span>
        </div>
        <div>
          <span
            data-testid="attr1-card"
          >
            {cardAttr1}
          </span>
        </div>
        <div>
          <span
            data-testid="attr2-card"
          >
            {cardAttr2}
          </span>
        </div>
        <div>
          <span
            data-testid="attr3-card"
          >
            {cardAttr3}
          </span>
        </div>
        <div>
          <span
            data-testid="rare-card"
          >
            {cardRare}
          </span>
          {
            cardTrunfo ? <span data-testid="trunfo-card">Super Trunfo</span> : ''
          }
        </div>
        <button
          data-testid="delete-button"
          value={ cardName }
          type="button"
          onClick={ onDeleteButtonClick }
        >
          Excluir
        </button>
      </section>
    );
  }
}

Deck.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
};

export default Deck;
