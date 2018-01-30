import React from 'react';
import { mount } from 'enzyme';
import CreateNewPost from '../components/CreateNewPost';

describe('create new post', ()=>{
  const newPost = mount(<CreateNewPost author='Steffe' updatePosts={() => {}} />);
  
  it('should create post with title and content', () => {
    newPost.find('input[name="title"]').simulate('change', {target: {name: 'title', value: 'Steffes title'}});
    newPost.find('textarea[name="content"]').simulate('change', {target: {name: 'content', value: 'Steffes texty text content'}});
    expect(newPost.state().title).toEqual('Steffes title');
    expect(newPost.state().content).toContain('Steffes texty');

  });

  it('should add post to localStorage', ()=> {
    newPost.setState({title: 'Steffes title', content: 'Steffes texty text content'});
    newPost.find("form").simulate('submit');
    const storagePlace = JSON.parse(localStorage.getItem('posts'));
    expect(storagePlace[0].title).toContain('Steffes title');
    expect(storagePlace[0].content).toContain('Steffes texty');
  });
  
});
