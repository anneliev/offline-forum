import React from 'react';
import { mount } from 'enzyme';
import Message from '../components/Bot/Message';

describe('should have different classes', () => {
  const style1 = 'bg-indigo-dark text-white';
  const style2 = 'bg-white text-grey-darker';

  it('Text should have style1 if not bot', () => {
    const wrapper = mount(<Message bot={false} message="Hello"/>);
    expect(wrapper.find('p').first().hasClass(style1)).toBe(true);
  });

  it('Text should have style2 if is bot', () => {
    const wrapper = mount(<Message bot={true} message="Hello"/>);
    expect(wrapper.find('p').last().hasClass(style2)).toBe(true);
  });
  
});
