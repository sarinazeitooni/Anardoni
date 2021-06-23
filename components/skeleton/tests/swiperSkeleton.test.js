import React from 'react';
import { shallow } from 'enzyme';
import SwiperSkeleton from "../Skeleton";
describe("swiper skeleton component", () => {
    it("should render div as props length", () => {
        const skeleton = shallow(<SwiperSkeleton />);
        expect(skeleton.length).toBe(1);
        // expect(skeleton.find("div").length).toBe(10);
        expect(skeleton).toMatchSnapshot();
    });
});