import React from 'react';
import { mount } from 'enzyme';
import MessageForm from '../components/Bot/MessageForm';

describe('create new message', () => {
  const newText = mount(<MessageForm onSubmit={() => { }} />);

  it('should create a new message and change state', () => {
    newText.find('input[name="userMessage"]').simulate('change', { target: { name: 'userMessage', value: 'Zacs message' } });
    expect(newText.state().userMessage).toBe('Zacs message');
  });

  it('should empty state after message is submitted', () => {
    newText.find('input[name="userMessage"]').simulate('change', { target: { name: 'userMessage', value: 'Zacs message' } });
    expect(newText.state().userMessage).toBe('Zacs message');
    newText.find('form').simulate('submit');
    expect(newText.state().userMessage).toBe('');
  });

});
