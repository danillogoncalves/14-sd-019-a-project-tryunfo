import React from 'react';
import Deck from './components/Deck';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      destription: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rare: 'normal',
      trunfo: false,
      button: true,
      hasTrunfo: false,
      saveState: [],
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
    const ResultSum = +attr1 + +attr2 + +attr3 <= sumMax;
    return (resultMinMax && ResultSum);
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

  varifyHasTrunfo = () => {
    const { saveState } = this.state;
    this.setState({
      hasTrunfo: saveState.some((element) => element.trunfo),
    });
    // console.log(this.state.saveState);
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      name, destription, attr1, attr2, attr3, image, rare, trunfo, saveState,
    } = this.state;
    const save = {
      name,
      destription,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
    };
    this.setState({
      saveState: [...saveState, save],
    }, () => this.setState({
      name: '',
      destription: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rare: 'normal',
      trunfo: false,
      button: true,
    }, () => this.varifyHasTrunfo()));
  }
  // Ajuda do Leo Araujo - Turma 19 - Tribo A(sync que se coda) para criar esse querySelector

  onDeleteButtonClick = ({ target }) => {
    const nameToBeDeleted = target
      .parentElement.querySelector('span[data-testid=name-card]')
      .innerText;
    const { saveState } = this.state;
    const newSaveState = saveState.filter(({ name }) => name !== nameToBeDeleted);
    this.setState({
      saveState: newSaveState,
    }, () => this.varifyHasTrunfo());
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
      hasTrunfo,
      saveState,
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
          hasTrunfo={ hasTrunfo }
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
        <h1>Todas as cartas</h1>
        {saveState.map((element, index) => (<Deck
          key={ index }
          cardName={ element.name }
          cardDescription={ element.destription }
          cardAttr1={ element.attr1 }
          cardAttr2={ element.attr2 }
          cardAttr3={ element.attr3 }
          cardImage={ element.image }
          cardRare={ element.rare }
          cardTrunfo={ element.trunfo }
          onDeleteButtonClick={ this.onDeleteButtonClick }
        />))}
      </>
    );
  }
}

export default App;
