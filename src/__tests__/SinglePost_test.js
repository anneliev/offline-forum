import React from 'react';
import { shallow, mount } from 'enzyme';
import SinglePost from '../components/SinglePost';

describe('Single post tests', () => {

  const aPost = {
    title: "Title",
    content: "Content", 
    id: "1", 
    author: "Zac",
    currentPersona: "Zac",
    date: "2018-01-24",
    postId: "1"
  };

  it('should show a single post', () => {
    const clickFn = jest.fn();
    const wrapper = mount(<SinglePost {...aPost} onClick={clickFn} />);
    expect(wrapper.find('p').first().text()).toContain("Content");
  });

  it('should have a class', () => {
    const clickFn = jest.fn();
    const wrapper = shallow(<SinglePost onClick={clickFn} {...aPost} />);
    expect(wrapper.find('div').hasClass('w-full shadow p-6 m-6 border rounded relative')).toBe(true);
  });
  
  it('should have id for onClick', () => {
    const clickFn = jest.fn();
    const wrapper = mount(<SinglePost onClick={clickFn} {...aPost} />);
    wrapper.find('button').simulate('click');
    expect(clickFn).toHaveBeenCalledWith('1');
  });

});
