import React from 'react';
import { shallow } from 'enzyme';
import DetailCardLink from "../DetailCardLink";
describe(" Detail Link image component" , ()=>{
    const link = {
        links : ['test' , 'test']
    };
    it("it should render a div",()=>{
        const container = shallow(<DetailCardLink item={link}/>)
        expect(container).toMatchSnapshot();
    })
});