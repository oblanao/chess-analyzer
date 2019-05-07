import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

let wrapper = shallow(<App />);

describe('App state', () => {
  it('sets correct config', () => {
    expect(wrapper.state().config.serverURL).toEqual('http://localhost:5000/');
  });
  it('shouldn\'t have any other state', () => {
    expect(Object.keys(wrapper.state()).length).toEqual(1);
  })
})
