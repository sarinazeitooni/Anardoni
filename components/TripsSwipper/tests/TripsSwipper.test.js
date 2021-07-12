import React from 'react';
import { shallow } from 'enzyme';
import SecondSwipper from "../TripsSwipper";
import store from "../../../redux/store/store";
import {Provider, useSelector} from 'react-redux';
describe(" Trip swiper component", () => {
    const swiper = shallow(<Provider store={store}> <SecondSwipper title={"test"}/></Provider>).dive();
    it("should have a swiper", () => {
        expect(swiper).toMatchSnapshot();
    });
    it("it should render a preview" ,()=>{
        expect(swiper.find('div.more-container')).toBeTruthy();
    });
    it("line 11 to 32" , ()=>{
        const swiperContainer = swiper.find('Swiper');
        expect(swiperContainer).toBeTruthy();
    });
    // it("title should be correct" , ()=>{
    //     expect(swiper.find('div .right-title').text()).toEqual("test");
    // })
});