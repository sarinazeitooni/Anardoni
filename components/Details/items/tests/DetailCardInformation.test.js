import React from 'react';
import { shallow } from 'enzyme';
import DetailCardInformation from "../DetailCardInformation";
describe("DetailCardInformation component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<DetailCardInformation/>)
        expect(container).toMatchSnapshot();
    })
});