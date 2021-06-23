import React from 'react';
import { shallow } from 'enzyme';
import ThirdSwipper from "../ThirdSwipper";
describe(" Third swiper component", () => {
    it("should render div as props length", () => {
        const swiper = shallow(<ThirdSwipper />);
        expect(swiper.find('Swiper').length).toBe(1);
        expect(swiper).toMatchSnapshot();
    });
    it("should render correctly" , ()=>{
        expect(shallow(<ThirdSwipper/>))
    })
});