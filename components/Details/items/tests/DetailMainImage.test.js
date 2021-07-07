import React from 'react';
import { shallow } from 'enzyme';
import DetailMainImage from "../DetailMainImage";
describe("DetailMainImage component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<DetailMainImage/>)
        expect(container).toMatchSnapshot();
    })
});