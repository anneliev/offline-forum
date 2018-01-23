
import React from 'react';
import { shallow } from 'enzyme';
import AvatarSelector from '../components/AvatarSelector';


it('should display the correct avatar, zac', () => {
  const avatar = shallow(<AvatarSelector currentPersona="Zac" />);
  expect(avatar.find("img").prop("src")).toBe("zac.png");
});

it('should display the correct avatar, esmeralda', () => {
  const avatar = shallow(<AvatarSelector currentPersona="Esmeralda" />);
  expect(avatar.find("img").prop("src")).toBe("esmeralda.png");
});

it('should display the correct avatar, morgana', () => {
  const avatar = shallow(<AvatarSelector currentPersona="Morgana" />);
  expect(avatar.find("img").prop("src")).toBe("morgana.png");
});


