import React from 'react';
import { shallow } from 'enzyme';
import DetailAdImage from "../DetailAdImage";
describe(" detail ad image component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<DetailAdImage/>)
        expect(container).toMatchSnapshot();
    });
    it("it should render an image",()=>{
        const container = shallow(<DetailAdImage/>)
        const image = container.find('img')
        expect(image).toHaveAttribute('src' , 'https://anardoni.com/img/ads/anargift.gif')
    })
});