import { shallow } from 'enzyme';
import messages from "../messages";
describe("navigation component", () => {
    const container = messages;
    it("should render a div", () => {
        expect(container.free).toBe('رایگان');
    });
    it("snapshot" , ()=>{
        expect(container).toMatchSnapshot();
    })
});