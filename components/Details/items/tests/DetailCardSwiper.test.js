import React from 'react';
import { shallow } from 'enzyme';
import DetailCardSwipper from "../DetailCardSwipper";
describe("DetailCardSwipper component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<DetailCardSwipper/>)
        expect(container).toMatchSnapshot();
    })
});