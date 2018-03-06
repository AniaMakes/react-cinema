import React from 'react';
import Header from './containers/Header';
import Main from './containers/Main';

class App extends React.Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}

export default App;
