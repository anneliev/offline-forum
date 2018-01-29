import React from 'react';
import { shallow } from 'enzyme';
import Button from '../components/Button';

describe('buttons should have classes', () => {
  const defaultStyle = 'bg-indigo-dark hover:bg-indigo-darker text-white font-bold py-2 px-4 rounded-full';
  const dangerStyle = 'bg-red-dark hover:bg-red-darker text-white font-bold py-2 px-4 rounded-full';

  it('Button should have default color if no danger', () => {
    const wrapper = shallow(<Button danger={false} onClick={() => { }}><p>Child</p></Button>);
    expect(wrapper.find('[data-test="button"]').hasClass(defaultStyle)).toBe(true);
  });

  it('Button should have danger color if danger is true', () => {
    const wrapper = shallow(<Button danger={true} onClick={() => { }}><p>Child</p></Button>);
    expect(wrapper.find('[data-test="button"]').hasClass(dangerStyle)).toBe(true);
  });
});

it('should be clickable', () => {
  const clickFn = jest.fn();
  const wrapper = shallow(<Button onClick={clickFn}><p>Child</p></Button>);
  wrapper.find('button').simulate('click');
  expect(clickFn).toHaveBeenCalled();
});
