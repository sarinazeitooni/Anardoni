import React from 'react';
import { shallow } from 'enzyme';
import FirstSwipper from "../FirstSwipper";
import {Swiper} from "swiper";

describe("Card component", () => {
    it("should have one Card component", () => {
        const firstswiper = shallow(<FirstSwipper/>);
        expect(firstswiper).toMatchSnapshot();
    });
});