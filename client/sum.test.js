import AddNumbers from './sum';
import { configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new EnzymeAdapter() });

test('Add Two Numbers:', () => {
    expect(AddNumbers(2,3)).toBe(5)
})