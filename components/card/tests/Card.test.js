import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';
import Card from "../Card";
import CardContainer from "../items/CardContainer";
import CardDetail from "../items/CardDetail";
describe("Card component", () => {
    it("should have one Card component", () => {
        const card = shallow(<Card/>);
            expect(card.length).toBe(1);
            const cardContainer =  card.find(<CardContainer/>);
            cardContainer.find(<CardDetail/>);
            cardContainer.find(<CardDetail/>);
    });
});