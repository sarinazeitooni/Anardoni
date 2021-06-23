import React from 'react';
import { shallow } from 'enzyme';
import Navigation from "../Navigation";
describe("navigation component", () => {
    it("should render a div", () => {
        const navigation = shallow(<Navigation/>);
        expect(navigation.length).toBe(1);
        const div = navigation.find('div');
        const ul = div.find('ul');
        const buttons = ul.find('button');
        expect(buttons.length).toBe(5)
        expect(navigation).toMatchSnapshot();
    });
});