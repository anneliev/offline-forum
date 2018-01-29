import React from 'react';
import { mount } from 'enzyme';
import SingleComment from '../components/SingleComment';

describe('single comment tests', () => {
  const aComment = 
    {
      comment: "A comment from Zac",
      id: "1",
      postId: 1,
      author: "Zac",
      date: "2018-01-29",
      currentPersona: "Zac",
      
    };

  it('should show a single comment', () => {
    const clickFn = jest.fn();
    const wrapper = mount(<SingleComment {...aComment} onClick={clickFn} />);
    expect(wrapper.find('p').first().text()).toContain("A comment from Zac");
  });

  it('should have id for onClick', () => {
    const clickFn = jest.fn();
    const wrapper = mount(<SingleComment {...aComment} onClick={clickFn} />);
    wrapper.find('button').simulate('click');
    expect(clickFn).toHaveBeenCalledWith('1');
  });

  it('should match snapshot', () => {
    const clickFn = jest.fn();
    const wrapper = mount(<SingleComment {...aComment} onClick={clickFn} /> );
    expect(wrapper.html()).toMatchSnapshot();
  })

});

