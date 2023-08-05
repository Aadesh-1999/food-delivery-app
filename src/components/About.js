import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

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
            <div className="m-5">
                About Page
                <div>
                    <UserContext.Consumer>
                    {(data)=><h1 className="text-purple-700">{data.login_user}</h1>}
                    </UserContext.Consumer>
                </div>
                <User name={"Aadesh Functional"}/>
                <UserClass  name={"Aadesh Class based 1"}/>
                <UserClass  name={"Aadesh Class based 2"}/>
            </div>
        );
    }
}
export default About;