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


it('should be able to change page', () => {
  const wrapper = mount(<App />);
  const { currentPage: defaultPage } = wrapper.state();
  expect(defaultPage).toBe("home");
  wrapper.instance().changePage();
  const { currentPage } = wrapper.state();
  expect(currentPage).toBe("bot");
});
