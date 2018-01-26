import React from 'react';
import { mount } from 'enzyme';
import CreateNewComment from '../components/CreateNewComment';

describe('create new comment', () => {
  const newComment = mount(<CreateNewComment author='Zac' postId="1" updateComments={() => { }} />);

  it('should create a new comment', () => {
    newComment.find('textarea[name="comment"]').simulate('change', { target: { name: 'comment', value: 'Zacs complimenting comment' } });
    expect(newComment.state().comment).toContain('Zacs complimenting comment');

  });

  it('should store comment to localStorage', () => {
    newComment.find('textarea[name="comment"]').simulate('change', { target: { name: 'comment', value: 'Zacs nasty comment' } });
    expect(newComment.state().comment).toContain('Zacs nasty comment');
    newComment.find('form').simulate('submit');
    const storedComment = JSON.parse(localStorage.getItem('comments'))[0].comment;
    console.log(storedComment);
    expect(storedComment).toContain('Zacs nasty comment');
  })
});