import React from "react";

//class based component
class UserClass extends React.Component {
    constructor(props){
        super(props);
        console.log("Child constructor ",this.props.name);
        this.state={
            count:0,
            userInfo:{
                name:"",
                location:""
            }
        }
    }

    async componentDidMount(){
        console.log("Child componentDidMount ",this.props.name);
        const data = await fetch("https://api.github.com/users/Aadesh-1999");
        const dataJson = await data.json();
        this.setState({
            userInfo:dataJson
        });
    }

    //this lifecycle method will get called after every update //Like useEffect
    componentDidUpdate(){
        console.log("Child componentDidUpdate ",this.props.name);
    }

    componentWillUnmount(){
        console.log("Child componentWillUnmount ",this.props.name);
    }

    render(){
        console.log("Child render ",this.props.name);
        return(
            <div style={{border:"black 1px solid"}}>
                <h3>{this.props.name}</h3>
                <h3>CitiCorp Pune</h3>
                <h3>Data from Github API : </h3>
                <li>
                    {this.state.userInfo.login}
                </li>
                <li>
                    {this.state.userInfo.name}
                </li>
                <li>
                    {this.state.userInfo.url}
                </li>
                <h3>{this.state.count}</h3>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    });
                }}>Click</button>
            </div>
        );

    };
}

export default UserClass;