import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="nameId">
          Name
          <input
            data-testid="name-input"
            id="nameId"
            name="name"
            type="text"
          />
        </label>
        <label htmlFor="destriptionId">
          Descrição
          <textarea
            data-testid="description-input"
            id="destriptionId"
            name="destription"
          />
        </label>
        <label htmlFor="attr1Id">
          Attr01
          <input
            data-testid="attr1-input"
            id="attr1Id"
            name="attr1"
            type="number"
          />
        </label>
        <label htmlFor="attr2Id">
          Attr02
          <input
            data-testid="attr2-input"
            id="attr2Id"
            name="attr2"
            type="number"
          />
        </label>
        <label htmlFor="attr3Id">
          Attr03
          <input
            data-testid="attr3-input"
            id="attr3Id"
            name="attr3"
            type="number"
          />
        </label>
        <label htmlFor="imageId">
          Imagem
          <input
            data-testid="image-input"
            id="imageId"
            name="image"
            type="text"
          />
        </label>
        <label htmlFor="rareId">
          Raridade
          <select
            data-testid="rare-input"
            id="rareId"
            name="rare"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfoId">
          <input
            data-testid="trunfo-input"
            id="trunfoId"
            name="trunfo"
            type="checkbox"
          />
          Super Trunfo
        </label>
        <button
          data-testid="save-button"
          type="submit"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
