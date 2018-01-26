import React from 'react';
import { shallow, mount } from 'enzyme';
import Posts from '../components/Posts';
import * as api from '../api';

describe('can show and remove comment', () =>{
  const posts = [
    {
      id: "1",
      title: "Zacs post title",
      content: "Zacs post content",
      author: "Zac",
      date: "2018-01-25 10:56:00",
    }
  ];
  
  it('should show a post from postList', () => {
    const wrapper = shallow(<Posts currentPersona="Zac" />);
    wrapper.setState({ posts });
    wrapper.instance().renderPostList(posts);
    expect(wrapper.state().posts[0].content).toEqual("Zacs post content");
  });
  
  it('should call remove post function', () => {
    api.removePost = jest.fn();
    const wrapper = shallow(<Posts currentPersona="Zac" postId="1" />);
    wrapper.instance().removePost();
    expect(api.removePost).toHaveBeenCalled();
  });
});

describe('can set post in localStorage', () => {
  const jsonPost = JSON.stringify([
    {
      id: "1",
      title: "Steffes post title",
      content: "Steffes post content",
      author: "Steffes",
      date: "2018-01-25 11:37:00",
    }
  ]);
  
  it('Should fetch post from localStorage', ()=> {
    const wrapper = mount(<Posts currentPersona="Steffe" /> );
    expect(wrapper.state().posts[0].content).toEqual('Steffes post content');
  });

  beforeEach(() => {
    localStorage.setItem('posts', jsonPost);
  });
  
  afterEach(() => {
    localStorage.clear();
  });
});

it('should match snapshot', () => {
  const wrapper = mount(<Posts currentPersona="Steffe" /> );
  expect(wrapper.html()).toMatchSnapshot();
})

