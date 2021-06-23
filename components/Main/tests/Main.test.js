import React from 'react';
import { shallow } from 'enzyme';
import Main from "../Main";
import Navigation from "../../navigation/Navigation";
import FirstSwipper from "../../FirstSwipper/FirstSwipper";
import FeedBack from "../../feedback/feedback";
import TripsSwipper from "../../TripsSwipper/TripsSwipper";
import GamesSwipper from "../../gamesSwipper/GamesSwipper";

describe("Main component", () => {
    it("should have 6 child component", () => {
        const main = shallow(<Main/>);
        expect(main.find(<Navigation/>)).toBe(1);
        expect(main.find(<FirstSwipper/>)).toBe(1);
        expect(main.find(<FeedBack/>)).toBe(1);
        expect(main.find(<TripsSwipper/>)).toBe(1);
        expect(main.find(<FirstSwipper/>)).toBe(1);
        expect(main.find(<GamesSwipper/>)).toBe(1);
        expect(main).toMatchSnapshot();
    });
});