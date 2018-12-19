import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';

Enzyme.configure({ adapter: new Adapter() });

const dom = new JSDOM();
global.window = dom.window;
global.document = dom.window.document;
