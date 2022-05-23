import React from "react";
import { configure, mount, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import UserDetail from "./UserDetail";
import { render } from "@testing-library/react";

configure({adapter : new Adapter()});

describe("<UserDetail/>", ()=>{ //describe component <UserDetail/>

    let details = [
        {
            "id" : "1",
            "name" : "James",
            "email" : "james@gmail.com"
        },
        {
            "id" : "2",
            "name" : "Maggie",
            "email" : "magie@gmail.com"
        },
        {
            "id" : "3",
            "name" : "Xolani",
            "email" : "xolani@gmail.com"
        },

    ]

    // console.log(details);

    
    
    test("should render a <UserDetail/> component ", ()=>{ //test render component
        
        const component = render(<UserDetail/>);

        expect(component).toBeDefined();

    });

    test("should be able to accept an array of user details", () => {//test parsing props  

        const component = mount(<UserDetail details={details}/>);

        expect(component.prop('details')).toEqual(details);
        

    });

    test("should be able to accept an array of user details", () => { //test length element 

        const component = mount(<UserDetail details={details}/>);

        let element = component.find('li');

        expect(element.length).toEqual(3);
        

    });

});