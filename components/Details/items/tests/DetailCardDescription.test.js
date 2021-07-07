import React from 'react';
import { shallow } from 'enzyme';
import DetailCardDescription from "../DetailCardDescription";
describe("detail card component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<DetailCardDescription/>)
        expect(container).toMatchSnapshot();
    })
});