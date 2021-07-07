import React from 'react';
import { shallow } from 'enzyme';
import Skeleton from "../Skeleton";
describe("Skeleton component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<Skeleton/>)
        expect(container).toMatchSnapshot();
    })
});