import * as React from 'react';
import './App.css';

import logo from './logo.svg';


interface ITestProps {
  name: string;
}

function SayHello(props: ITestProps) {
  return (<h1>Hello {props.name}</h1>)
}

class App extends React.Component<any,any> {

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <body>
        <SayHello name="love of my life"/>
        </body>
      </div>
    );
  }
}

export default App;
