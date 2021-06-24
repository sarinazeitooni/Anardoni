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
        expect(main.find(<Navigation/>)).toEqual({});
        expect(main.find(<FirstSwipper/>)).toEqual({});
        expect(main.find(<FeedBack/>)).toEqual({});
        expect(main.find(<TripsSwipper/>)).toEqual({});
        expect(main.find(<FirstSwipper/>)).toEqual({});
        expect(main.find(<GamesSwipper/>)).toEqual({});
        expect(main).toMatchSnapshot();
    });
});