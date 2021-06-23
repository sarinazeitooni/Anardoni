import { shallow } from 'enzyme';
import sum from './sum';
describe("sum component", () => {
    it("should render a div", () => {
        const wrapper = shallow(<sum/>);
        expect(wrapper.length).toBe(1);
    });
});