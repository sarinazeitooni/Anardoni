import React from 'react';
import { shallow } from 'enzyme';
import DetailCardNewItems from "../DetailCardNewItems";
describe("DetailCardNewItems component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<DetailCardNewItems/>)
        expect(container).toMatchSnapshot();
    })
});