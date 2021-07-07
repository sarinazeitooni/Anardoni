import React from 'react';
import { shallow } from 'enzyme';
import DetailCardDescription from "../DetailCardInfo";
describe(" DetailCardDescription component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<DetailCardDescription/>)
        expect(container).toMatchSnapshot();
    })
});