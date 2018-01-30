import React from 'react';
import { shallow } from 'enzyme';
import Bot from '../components/Bot/Bot';

it('should create a new message and change state', () => {
  const userMessage = 'Hello';
  const wrapper = shallow(<Bot />);
  wrapper.instance().onSubmit(userMessage);
  expect(wrapper.state().messages[0].message).toContain('Hello');
});

it('should change state when typing', ()=>{
  const wrapper = shallow(<Bot />);
  expect(wrapper.state('typing')).toBe(false);
  wrapper.instance().sendReply();
  expect(wrapper.state('typing')).toBe(true);
});
