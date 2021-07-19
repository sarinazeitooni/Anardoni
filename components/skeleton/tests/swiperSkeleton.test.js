import React from 'react';
import { shallow } from 'enzyme';
import SwiperSkeleton from "../SwiperSkeleton";
describe("swiper skeleton component", () => {
    const skeleton = shallow(<SwiperSkeleton slides={3} />);

    it("should render div as props length", () => {
        expect(skeleton.length).toBe(1);
        expect(skeleton).toMatchSnapshot();
    });
    it("should render a div" , ()=>{
        const items = skeleton.find("div .skeleton-container");
        expect(items).toBeTruthy()
    })
});