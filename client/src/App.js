import React, { Component } from 'react';

import { config } from './utils/config';
import { isLocalMode } from './utils/helpers';

import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: null
    }
  }
  componentDidMount() {
    let correctConfig = {};
    if (isLocalMode()) {
      correctConfig = config.dev
    } else {
      correctConfig = config.prod
    }
    this.setState({
      config: correctConfig
    }, async () => {
      const result = await Axios.get(`${this.state.config.serverURL}questions/topics`);
      console.log(result);
    })
  }
  render() {
    return (
      null
    );
  }
}

export default App;
