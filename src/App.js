import React from 'react';
import Deck from './components/Deck';
import Card from './components/Card';
import Form from './components/Form';
import Filter from './components/Filter';

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
      nameFilter: '',
      nameFilterDisabled: false,
      rareFilter: 'todas',
      rareFilterDisabled: false,
      trunfoFilter: false,
      filter: [],
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
    }, this.enableDisableButton);
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
    }, this.setState({
      name: '',
      destription: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rare: 'normal',
      trunfo: false,
      button: true,
    }, this.varifyHasTrunfo));
  }
  // Ajuda do Leo Araujo - Turma 19 - Tribo A(sync que se coda) para criar esse querySelector
  // .parentElement.querySelector('span[data-testid=name-card]').innerText;
  // Com ajuda da Luá - Turma 19 - Tribo A, descobri com arrumar o erro nos testes.

  onDeleteButtonClick = ({ target }) => {
    const nameToBeDeleted = target.value;
    const { saveState } = this.state;
    const newSaveState = saveState.filter(({ name }) => name !== nameToBeDeleted);
    this.setState({
      saveState: newSaveState,
    }, this.varifyHasTrunfo);
  }

  onInputFilterChange = ({ target }) => {
    const { saveState, rareFilter } = this.state;
    const inputLowerCase = target.value.toLowerCase();
    const nameResult = saveState.filter(({ name }) => {
      const nameLowerCase = name.toLowerCase();
      return nameLowerCase.includes(inputLowerCase);
    });
    const rareNameResult = nameResult.filter(({ rare }) => rare === rareFilter);
    this.setState({
      [target.name]: target.value,
      filter: rareFilter !== 'todas' ? rareNameResult : nameResult,
    });
  }

  onSelectFilterCharge = ({ target }) => {
    const { saveState, nameFilter } = this.state;
    const inputLowerCase = nameFilter.toLowerCase();
    const rareResult = saveState.filter(({ name }) => {
      const nameLowerCase = name.toLowerCase();
      return nameLowerCase.includes(inputLowerCase);
    });
    const nameRareResult = rareResult.filter(({ rare }) => rare === target.value);
    this.setState({
      [target.name]: target.value,
      filter: target.value !== 'todas' ? nameRareResult : rareResult,
    });
  }

  onCheckboxFilterClick = ({ target }) => {
    const { saveState } = this.state;
    const result = saveState.filter(({ trunfo }) => trunfo === target.checked);
    this.setState({
      [target.name]: target.checked,
      nameFilter: '',
      nameFilterDisabled: target.checked,
      rareFilter: 'todas',
      rareFilterDisabled: target.checked,
      filter: result,
    });
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
      nameFilter,
      nameFilterDisabled,
      rareFilter,
      rareFilterDisabled,
      trunfoFilter,
      filter,
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
        <Filter
          onInputFilterChange={ this.onInputFilterChange }
          onSelectFilterCharge={ this.onSelectFilterCharge }
          onCheckboxFilterClick={ this.onCheckboxFilterClick }
          nameFilter={ nameFilter }
          nameFilterDisabled={ nameFilterDisabled }
          rareFilter={ rareFilter }
          rareFilterDisabled={ rareFilterDisabled }
          trunfoFilter={ trunfoFilter }
        />
        {(filter.length || nameFilter || rareFilter !== 'todas' || trunfoFilter
          ? filter
          : saveState)
          .map((element, index) => (<Deck
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
