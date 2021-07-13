import React from 'react';
import { shallow } from 'enzyme';
import SmallCardImage from '../SmallCardDetail';
describe("SmallCardImage component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<SmallCardImage cardImage={"test"}/>);
        expect(container).toMatchSnapshot();
    });

});