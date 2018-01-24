import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../components/App';


test('renders the app', () => {
  render(<App />);
});

it('should display current persona', () => {
  const wrapper = shallow(<App />);
  const person = 'Steffe';
  wrapper.setState({ 'currentPersona': person});
  const current = wrapper.state().currentPersona;
  expect(current).toBe('Steffe');
});

it('should get current persona', () => {
  const wrapper = mount(<App />);
  wrapper.instance().changePersona({ target:{ "value": "Zac"}});
  const { currentPersona } = wrapper.state();
  expect(currentPersona).toBe("Zac");
});

it('should be able to change page from home to bot', () => {
  const wrapper = mount(<App />);
  const { currentPage: homePage } = wrapper.state();
  expect(homePage).toBe("home");
  wrapper.instance().changePage();
  const { currentPage } = wrapper.state();
  expect(currentPage).toBe("bot");
});

it.skip('should be able to change page from bot to home', () => {
  const wrapper = mount(<App />);
  const { currentPage } = wrapper.state();
  expect(currentPage).toBe("home");
  wrapper.instance().changePage();
  expect(currentPage).toBe("bot");
  wrapper.instance().changePage();
  const { currentPage: homePage } = wrapper.state();
  expect(homePage).toBe("home");
});
