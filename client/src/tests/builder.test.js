import React from 'react';
import Enzyme, { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WidgetBuilder from '../widget-builder/pages/WidgetBuilder';
import '@testing-library/jest-dom/extend-expect';

Enzyme.configure({ adapter: new Adapter() });

describe('<WidgetBuilder />', () => {
    it('Error should appear because fields are empty', () => {
        const wrapper = mount(<WidgetBuilder />);
        const button = wrapper.find('submit-btn');
     
        button.simulate('click');
        expect(wrapper.state('errors')).not.equal(0);
    })
   
})