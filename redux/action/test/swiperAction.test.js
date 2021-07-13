import React from 'react';
import { shallow } from 'enzyme';
import swiperAction from "../Swiperaction";
describe(" swiperAction " , ()=>{
    it("it should be correct",()=>{
        const container = shallow(<swiperAction/>)
        expect(container).toMatchSnapshot();
    })
});