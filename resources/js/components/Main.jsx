import React, { Component } from "react";
import postService from "@/js/services/post.service";

export class Main extends Component {
  constructor () {
    super()
    this.state = {
      posts: []
    }
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    let posts = this.state.posts.map((post, index) => {
      return <div key={index}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    });
    
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        <p>Hello from react!</p>
        <div className="posts">
          {posts}
        </div>
      </div>
    )
  }
  handleClick () {
    // this.setState();
  }
  componentDidMount () {
    postService.getAll(3).then(((posts) => {
      debugger;
      this.setState({
        posts:posts
      })
    }).bind(this));
  }
}

export default Main
