import React from 'react';
import { shallow } from 'enzyme';
import DetailCardLink from "../DetailCardLink";
describe("DetailCardLink component" , ()=>{
    const container = shallow(<DetailCardLink item={[]}/>);
    it("it should render a div",()=>{
        expect(container).toMatchSnapshot();
    });
    it("it should render a mobile-card-container" ,()=>{
        const links = shallow(<DetailCardLink item={["1","2"]}/>);
        expect(links.find('div.link-container')).toBeTruthy();
    });
});