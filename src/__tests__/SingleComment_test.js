import React from 'react';
import { mount } from 'enzyme';
import SingleComment from '../components/SingleComment';

it('should have id for onClick', () => {
  const clickFn = jest.fn();
  const wrapper = mount(<SingleComment onClick={clickFn} comment="Comment" id="1" author="Zac" currentPersona="Zac" date="2018-01-24" postId="1" />);
  wrapper.find('button').simulate('click');
  expect(clickFn).toHaveBeenCalledWith('1');
});
