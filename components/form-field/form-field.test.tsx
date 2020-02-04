import { shallow } from 'enzyme';

import { default as FormField } from './form-field.component';

describe('Button Component', () => {
  it('Renders button with correct label text', () => {
    const component = shallow(<FormField label="Username" name="username" />);

    expect(component.exists()).toBeTruthy();
  });
});
