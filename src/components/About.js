import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{

    constructor()
    {
        super();
        console.log("Parent constructor");
    }

    componentDidMount(){
        console.log("Parent componentDidMount");
    }

    render(){
        console.log("Parent render");
        return (
            <div>
                About Page
                <User name={"Aadesh Functional"}/>
                <UserClass  name={"Aadesh Class based 1"}/>
                <UserClass  name={"Aadesh Class based 2"}/>
            </div>
        );
    }
}
export default About;