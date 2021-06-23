import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';
import DetailsCardContainer from "../DetailsCardContainer";
import DetailMainImage from "../items/DetailMainImage";
describe("detail card component", () => {
    it("should match snap shot", () => {
        const detailCardContainer = shallow(<DetailsCardContainer/>);
        expect(detailCardContainer.length).toBe(1);
        const detailcardcontainerfragment = detailCardContainer.find(<React.Fragment/>);
        detailcardcontainerfragment.find(<DetailMainImage/>);
        expect(detailCardContainer).toMatchSnapshot();
    });
});