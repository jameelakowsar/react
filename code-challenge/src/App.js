import React, { Component } from 'react';
import './App.css';
import Flexi from "./Flexi";

const flexiConfig = {
  items: [
    {
      "name": "person_name",
      "label": "Person's Name",
      "type": "TextField",
      "children": [{
        "name": "person_name_1",
        "label": "First Person's Name",
        "type": "TextField",
      },
      {
        "name": "person_name_34",
        "label": "Second Persons name",
        "type": "TextField",
      }]
    },
    {
      "name": "states",
      "label": "Person's state",
      "type": "DropDown",
      "values": [
        "Maharashtra",
        "Kerala",
        "Tamil Nadu"
      ]
    }
  ]
};


class App extends Component {

  onFormSubmit = (data) => {
    console.log('submitted', data);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Domino</h1>
        </header>
        <br />
        <Flexi
          onSubmit={this.onFormSubmit}
          config={flexiConfig.items}
        />
      </div>
    );
  }
}

export default App;
