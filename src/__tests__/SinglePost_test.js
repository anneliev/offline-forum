import React from 'react';
import { shallow } from 'enzyme';
import SinglePost from '../components/SinglePost';

it('should have a class', () => {
    const wrapper = shallow(<SinglePost onClick={() => {}} title="Title" content="Content" id="1" author="Zac" currentPersona="Zac" date="2018-01-24" postId="1" />);
    expect(wrapper.find('div').hasClass('w-full shadow p-6 m-6 border rounded relative')).toBe(true);
})

it('should have id for onClick', () => {
    const clickId= jest.fn(id=>id);
    const wrapper = shallow(<SinglePost onClick={clickId} title="Title" content="Content" id="1" author="Zac" currentPersona="Zac" date="2018-01-24" postId="1" />);
    expect(wrapper.find('div').hasClass('w-full shadow p-6 m-6 border rounded relative')).toBe(true);
})