import React from 'react';
import { shallow } from 'enzyme';
import SecondSwipper from "../TripsSwipper";
import store from "../../../redux/store/store";
import {Provider} from 'react-redux';
describe(" Trip swiper component", () => {
    it("should have a swiper", () => {
        const swiper = shallow(<Provider store={store}> <SecondSwipper/></Provider>);
        expect(swiper.find('Swiper').length).toBe(1);
        expect(swiper).toMatchSnapshot();
    });
    it("should render correctly" , ()=>{
        expect(shallow(<Provider store={store}> <SecondSwipper/></Provider>))
    })
});