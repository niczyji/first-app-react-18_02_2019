import React from 'react';

class Button extends React.Component {
  handleClick = () => {
    this.props.onClickFunction(this.props.incrementValue);
  };

  render() {
    return (
      <button
        onClick={this.handleClick}>
        +{this.props.incrementValue}
      </button>
    );
  }
}

const Result = (props) => {
  return (
    <div>{props.counter}</div>
  );
};

const Card = (props) => {
  return (
    <div style={{ margin: '1em' }}>
      <img width="75" src={props.avatar_url} />
      <div style={{ display: 'inline-block', marginLeft: 10 }}>
        <div style={{ fontSize: '1.25em', fontWeight: 'bold' }} >{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  );
};


let data = [
  {
    name: "Paul O’Shannessy",
    avatar_url: "https://avatars1.githubusercontent.com/u/8445?v=4",
    company: "Facebook"
  },
  {
    name: "Ola",
    avatar_url: "https://avatars0.githubusercontent.com/u/15966513?v=4",
    company: "brak"
  },
  {
    name: "Aleksandra Bucior",
    avatar_url: "https://avatars2.githubusercontent.com/u/550600?v=4",
    company: "brak"
  }
];


const CardList = (props) => {
  return (
    <div>
      {/*<Card name="Paul O’Shannessy" avatar_url="https://avatars1.githubusercontent.com/u/8445?v=4" company="Facebook" />*/}
      {props.cards.map(card => <Card {...card} />)}
    </div>
  );
};

class Form extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Github username" />
        <button type="submit">Add card</button>
      </form>
    );
  }
}

class App extends React.Component {
  state = { counter: 0 };

  incrementCounter = (incrementValue) => {
    this.setState((prevState) => ({
      counter: prevState.counter + incrementValue
    }));
  };


  render() {
    return (
      <div>
        <Button incrementValue={1} onClickFunction={this.incrementCounter} />
        <Button incrementValue={5} onClickFunction={this.incrementCounter} />
        <Button incrementValue={10} onClickFunction={this.incrementCounter} />
        <Button incrementValue={100} onClickFunction={this.incrementCounter} />
        <Result counter={this.state.counter} />
        <Form />
        <CardList cards={data} />
      </div>
      );
  }
}



export default App;
