import React from 'react';
import { shallow } from 'enzyme';
import Button from '../components/Button';

const defaultStyle = 'bg-indigo-dark hover:bg-indigo-darker text-white font-bold py-2 px-4 rounded-full';
const dangerStyle = 'bg-red-dark hover:bg-red-darker text-white font-bold py-2 px-4 rounded-full';


it('Button should have default color', () => {
    const wrapper = shallow(<Button onClick={() => {}}><p>Child</p></Button>);
    expect(wrapper.find('[data-test="button"]').hasClass(defaultStyle)).toBe(true);
})

it('Button should have danger color', () => {
    const wrapper = shallow(<Button danger={true} onClick={() => {}}><p>Child</p></Button>);
    expect(wrapper.find('[data-test="button"]').hasClass(dangerStyle)).toBe(true);
})
