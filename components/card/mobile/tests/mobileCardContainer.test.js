import React from 'react';
import { shallow } from 'enzyme';
import MobileCardContainer from "../MobileCardContainer";
describe("MobileCardContainer component", () => {
    const card = shallow(<MobileCardContainer/>);
    it("should have one Card component", () => {
        expect(card).toMatchSnapshot();
    });
    it("should be one" , ()=>{
        expect(card.length).toBe(1);
    })
});