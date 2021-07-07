import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from "../CardContainer";
describe("CardContainer component" , ()=>{
    const container = shallow(<CardContainer/>);
    it("it should render a div",()=>{
        expect(container).toMatchSnapshot();
    });
    it("it should render a second-swipper-container" ,()=>{
        expect(container.find('div.card-container')).toBeTruthy();
    });
});