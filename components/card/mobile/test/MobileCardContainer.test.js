import React from 'react';
import { shallow } from 'enzyme';
import MobileCardContainer from "../MobileCardContainer";
describe("MobileCardContainer component" , ()=>{
    const container = shallow(<MobileCardContainer/>);
    it("it should render a div",()=>{
        expect(container).toMatchSnapshot();
    });
    it("it should render a mobile-card-container" ,()=>{
        expect(container.find('div.mobile-card-container')).toBeTruthy();
    });
});