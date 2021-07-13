import React from 'react';
import { shallow } from 'enzyme';
import SmallCardDetail from '../SmallCardDetail';
describe("SmallCardDetail component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<SmallCardDetail/>)
        expect(container).toMatchSnapshot();
    })
});