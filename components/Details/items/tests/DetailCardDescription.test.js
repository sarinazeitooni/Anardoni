import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import DetailCardDescription from "../DetailCardDescription";

describe("detail card component", () => {
    const initialState = {
        btnValue: true
    }
    const mockStore = configureStore();
    let store = mockStore(initialState);
    const container = shallow(<DetailCardDescription/>);
    it("it should render a div", () => {
        expect(container).toMatchSnapshot();
    });
    it("it should render a second-swiper-container", () => {
        expect(container.find('div.more-container')).toBeTruthy();
    });
    it("should render some div", () => {
        expect(container.find("div.more-container")).toBeTruthy();
    });
    it("should render about-items-container", () => {
        expect(container.find('div.about-items-container')).toBeTruthy();
    })
});