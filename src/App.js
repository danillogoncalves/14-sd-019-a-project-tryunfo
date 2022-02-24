import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      destription: '',
      attr1: '',
      attr2: '',
      attr3: '',
      image: '',
      rare: 'normal',
      trunfo: false,
      button: true,
    };
  }

  notEmpty = () => {
    const list = [
      'name',
      'destription',
      'image',
      'rare',
    ];
    return list.every((elemen) => {
      const validation = this.state;
      return validation[elemen];
    });
  }

  validNumbers = () => {
    const list = [
      'attr1',
      'attr2',
      'attr3',
    ];
    const resultMinMax = list.every((elemen) => {
      const validation = this.state;
      const min = 0;
      const max = 90;
      return validation[elemen] >= min && validation[elemen] <= max;
    });
    const { attr1, attr2, attr3 } = this.state;
    const sumMax = 210;
    const ResultSum = Number(attr1) + Number(attr2) + Number(attr3) <= sumMax;
    return (resultMinMax === true && ResultSum === true);
  }

  enableDisableButton = () => {
    const text = this.notEmpty();
    const number = this.validNumbers();
    this.setState({ button: !(text && number) });
  }

  onInputChange = ({ target }) => {
    const { name, value, type } = target;
    const typeOfInput = type === 'checkbox'
      ? target.checked
      : value;
    this.setState({
      [name]: typeOfInput,
    }, () => this.enableDisableButton());
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    console.log(event.target);
  }

  render() {
    const { name,
      destription,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
      button,
    } = this.state;
    return (
      <>
        <div>
          <h1>Tryunfo</h1>
        </div>
        <Form
          cardName={ name }
          cardDescription={ destription }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          hasTrunfo={ false }
          isSaveButtonDisabled={ button }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ name }
          cardDescription={ destription }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
      </>
    );
  }
}

export default App;
