import '@testing-library/jest-dom/extend-expect';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//Setting up Enzyme adapter for testing
configure({ adapter: new Adapter() });
