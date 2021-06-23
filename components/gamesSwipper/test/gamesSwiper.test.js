import React from 'react';
import { shallow } from 'enzyme';
import GamesSwipper from "../GamesSwipper";

describe("games component", () => {
    it("should render correctly", () => {
        const gameSwiper = shallow(<GamesSwipper/>);
        expect(gameSwiper.length).toBe(1);
        expect(gameSwiper).toMatchSnapshot();
    });
});