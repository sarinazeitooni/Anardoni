import React from 'react';
import { shallow } from 'enzyme';
import CardDetail from "../CardDetail";
describe("CardDetail component" , ()=>{
    const container = shallow(<CardDetail/>);
    it("it should render a div",()=>{
        expect(container).toMatchSnapshot();
    });
    it("it should render a second-swipper-container" ,()=>{
        expect(container.find('div.card-detail-container')).toBeTruthy();
    });
});