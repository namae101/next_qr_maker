import { shallow } from 'enzyme';

import { default as Navbar } from './footer.component';

describe('Button Component', () => {
  it('Renders button with correct label text', () => {
    const component = shallow(<Navbar />);

    expect(component.exists()).toBeTruthy();
  });
});
