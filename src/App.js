import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  onInputChange = ({ target }) => {
    console.log(target);
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    console.log(event.target);
  }

  render() {
    return (
      <>
        <div>
          <h1>Tryunfo</h1>
        </div>
        <Form
          cardName=""
          cardDescription=""
          cardAttr1=""
          cardAttr2=""
          cardAttr3=""
          cardImage=""
          cardRare=""
          cardTrunfo={ false }
          hasTrunfo={ false }
          isSaveButtonDisabled={ false }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
      </>
    );
  }
}

export default App;
