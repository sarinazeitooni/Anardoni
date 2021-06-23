import React from 'react';
import { shallow } from 'enzyme';
import FeedBack from "../feedback";
describe("feedback component", () => {
    it("should have a specific text", () => {
        const feedback = shallow(<FeedBack/>);
        expect(feedback.length).toBe(1);
        const text = feedback.find('span');
        expect(text.text('بازخورد'));
        expect(feedback).toMatchSnapshot();
    });
});