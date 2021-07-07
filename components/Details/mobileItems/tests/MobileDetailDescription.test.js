import React from 'react';
import { shallow } from 'enzyme';
import MobileDetailDiscription from "../MobileDetailDescription";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
describe("MobileDetailDiscription component" , ()=>{
    const initialState = {}
    const mockStore = configureStore();
    let store = mockStore(initialState);
    const container = shallow(<Provider store={store}><MobileDetailDiscription item={[]}/></Provider>);
    it("it should render a div",()=>{
        expect(container).toMatchSnapshot();
    });
    it("it should render a mobile-card-container" ,()=>{
        expect(container.find('div.more-container')).toBeTruthy();
    });
});