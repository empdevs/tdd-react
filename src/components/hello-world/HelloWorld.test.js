import React from "react";
import { configure, mount, shallow } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import HelloWorld from "./HelloWorld";

configure({adapter : new Adapter()});

describe("<HelloWorld/>", ()=>{ //describe component <HelloWorld/>

    const component = shallow(<HelloWorld/>); //This is component will be test

    test('should render a <HelloWorld/> component', () => { //test that the hello world component must be render

        expect(component).toBeDefined(); //expect component to be defined

    });

    test('find element h1 in component', () => { //This is find element h1 in component

        let element = component.find("h1"); //find element h1 in component
        
        expect(element.length).toEqual(1); //expect there is only one element in the component 

    });

    test('should contain an H1 element with the text "Hello World"', () => { //This is in component should contain an H1 elemeny with the text "Hello World";

        let element = component.find("h1"); //find element h1 in component

        let expectedText = "Hello World"; // expectation text

        expect(element.text()).toEqual(expectedText); // equal text in element with expect text

    });

});