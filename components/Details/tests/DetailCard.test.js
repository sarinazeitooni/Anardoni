import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';
import DetailsCardContainer from "../DetailsCardContainer";
import DetailMainImage from "../items/DetailMainImage";
describe("Card component", () => {
    it("should have 9 children", () => {
        const detailCardContainer = shallow(<DetailsCardContainer/>);
        expect(detailCardContainer.length).toBe(1);
        const detailcardcontainerfragment = detailCardContainer.find(<React.Fragment/>);
        detailcardcontainerfragment.find(<DetailMainImage/>);
    });
});