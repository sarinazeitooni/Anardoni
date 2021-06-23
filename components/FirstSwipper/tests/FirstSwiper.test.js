import React from 'react';
import { shallow } from 'enzyme';
import FirstSwipper from "../FirstSwipper";
import {Swiper} from "swiper";

describe("Card component", () => {
    it("should have one Card component", () => {

        const firstswiper = shallow(<FirstSwipper/>);
  console.log(firstswiper.debug())
        // expect(firstswiper.length).toBe(1);
        // const swiper =  firstswiper.find(<Swiper/>);
        // expect(swiper.length).toBe(4);
        // expect(firstswiper).toMatchSnapshot();
    });
});