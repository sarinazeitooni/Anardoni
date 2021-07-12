import React from 'react';
import { shallow } from 'enzyme';
import SwiperSkeleton from "../Skeleton";
describe("swiper skeleton component", () => {
    it("should render div as props length", () => {
        const skeleton = shallow(<SwiperSkeleton />);
        expect(skeleton.length).toBe(1);
        expect(skeleton).toMatchSnapshot();
    });
    it("should render a div" , ()=>{
        const skeleton = shallow(<SwiperSkeleton />);
        expect(skeleton.find("div .skeleton-container")).toBeTruthy();
    })
});