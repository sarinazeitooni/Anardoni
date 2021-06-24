import React from 'react';
import { shallow } from 'enzyme';
import SmallCardContainer from "../SmallCardContainer";
describe("small card conatiner component" , ()=>{
   it("it should render a div",()=>{
       const container = shallow(<SmallCardContainer/>)
       expect(container).toMatchSnapshot();
   })
});