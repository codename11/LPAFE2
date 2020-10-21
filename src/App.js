import React, { Component } from 'react';

import ListPosts from "./components/listPosts";
import CreatePost from "./components/createPost";
import ShowPost from "./components/showPost";
import UpdatePost from "./components/updatePost";
import DeletePost from "./components/deletePost";
import Register from "./components/register";
import Login from "./components/login";

import {connect} from "react-redux";
import {login} from "./actions/authActions";

import { publicRoutes, privateRoutes} from "./apiroutes/apiRoutes";

class App extends Component {

  constructor() {
    super();
    this.state = {
      filteredMenu: [...publicRoutes],
      elemIndex: 0
    };
    this.setActive = this.setActive.bind(this);
    this.filterize = this.filterize.bind(this);

  }

  setActive(e){

    e.preventDefault();
    let elem = e.target;

    let len1 = elem.attributes.length;
    let obj1 = {};
    let name = null;
    let value = null;
    for(let i=0;i<len1;i++){

      let attr = elem.attributes[i];

      name = attr.name;
      value = attr.value;
      
      obj1[name] = value;
      
    }

    let allTabs = document.querySelectorAll(".nav-link");
    let len2 = allTabs.length;
    for(let i=0;i<len2;i++){

      if(allTabs[i]===elem){

        this.setState({
          elemIndex: i
        });
        
      }
      
    }
    
    this.setState(obj1);

  }

  filterize() {

    let token = this.props.auth.access_token;

    this.setState({
      filteredMenu: token && token.length>0 ? [...privateRoutes] : [...publicRoutes],
      elemIndex: 0
    });

  }

  componentDidMount(){

    this.filterize();
    
  }

  /*UNSAFE_*/componentWillReceiveProps(nextProps){

    let token = nextProps.auth.access_token;
    if(nextProps.auth.access_token){

      this.setState({
        filteredMenu: token && token.length>0 ? [...privateRoutes] : [...publicRoutes],
        elemIndex: 0
      });

    }
    
  }

  render() {
    //console.log();
    /*console.log("AppProps: ", this.props);
    console.log("AppState: ", this.state);*/

    let access_token = this.props.auth.access_token;
    let elemIndex = this.state.elemIndex;
    let active =  null;

    let filteredMenu = access_token ? [...privateRoutes] : [...publicRoutes];

    let lis = filteredMenu ? filteredMenu.map((item, i) => {

      active = elemIndex===i || (i===0 && elemIndex===0) ? " active" : "";
      
      return <li className="nav-item" key={i}>
        <a className={"nav-link" + active} data-toggle="tab" href={"#"+item} onClick={this.setActive}>{item}</a>
      </li>;

    }) : null;

    let tabContents = filteredMenu ? filteredMenu.map((item, i) => {

      active = elemIndex===i || (i===0 && elemIndex===0) ? " active" : "";

      return <div id={item} key={i} className={"container tab-pane" + active}><br/>
            
            {access_token===null && item==="register" ? <Register/> : null}

            {access_token===null && item==="login" ? <Login/> : null}

            {access_token!==null && item==="list" ? <ListPosts/> : null}

            {access_token!==null && item==="show" ? <ShowPost/> : null}

            {access_token!==null && item==="create" ? <CreatePost/> : null}

            {access_token!==null && item==="update" ? <UpdatePost/> : null}

            {access_token!==null && item==="delete" ? <DeletePost/> : null}

        </div>;

    }) : null;

    return (

      <div className="container">

        <ul className="nav nav-tabs" role="tablist">
          {lis}
        </ul>

        <div className="tab-content">
          {tabContents}
        </div>

      </div>

    )
  }
}

const mapStateToProps = (state) =>{ 

  return ({auth: state.auth.auth,});

};

export default connect(mapStateToProps, { login })(App);
