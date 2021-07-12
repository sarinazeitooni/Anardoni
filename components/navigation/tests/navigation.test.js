import React from 'react';
import { shallow } from 'enzyme';
import Navigation from "../Navigation";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
describe("navigation component", () => {
    const initialState = {
        navigationBtn: true
    }
    const mockStore = configureStore();
    let store = mockStore(initialState);
    const navigation = shallow(<Provider store={store}><Navigation/></Provider>);
    it("should render a div", () => {
        expect(navigation.length).toBe(1);
    });
    it("snapshot" , ()=>{
        expect(navigation).toMatchSnapshot();
    })
});