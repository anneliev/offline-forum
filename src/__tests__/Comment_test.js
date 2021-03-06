import React from 'react';
import { shallow, mount } from 'enzyme';
import Comments from '../components/Comments';
import* as api from '../api';

describe('Comments tests', () => {

  const comments = [
    {
      comment: "A comment",
      id: "1",
      postId: 1,
      author: "Zac",
      date: "2018-01-23",
      currentPersona: "Zac"
    }
  ];
  
  it('should show comment list', () => {
    const wrapper = mount(<Comments postId="1" currentPersona="Zac" author="Zac" />);
    wrapper.setState({ comments });
    wrapper.instance().renderCommentList(comments);
    expect(wrapper.find('SingleComment').text()).toContain("A comment");
  });
  
  it('should call remove comment function', () => {
    api.removeComment = jest.fn();
    const wrapper = shallow(<Comments postId="1" currentPersona="Zac" author="Zac" />);
    wrapper.instance().removeComment();
    expect(api.removeComment).toHaveBeenCalled();
  });

});

it('should match snapshot', () => {
  const wrapper = mount(<Comments postId="1" currentPersona="Zac" />)
  expect(wrapper).toMatchSnapshot();
});
