import React, { Component } from 'react';
import ListPosts from "./components/listPosts";
import {Provider} from "react-redux";
import store from "./store";
import CreatePost from "./components/createPost";
import ShowPost from "./components/showPost";
import UpdatePost from "./components/updatePost";
import DeletePost from "./components/deletePost";

class App extends Component {
  render() {
    
    return (

      <Provider store={store}>
        <ListPosts/>
        <CreatePost/>
        <ShowPost/>
        <UpdatePost/>
        <DeletePost/>
      </Provider>

    )
  }
}

export default App;
