import React, { Component } from "react";
import postService from "@/js/services/post.service";

export class Main extends Component {
  pageNumber = 1;
  postFetchLimit= 15;
  fetchDelay = 0;

  state = {
    posts: [],
    isFetching: false
  };

  constructor () {
    super()
    this.onScroll = this.onScroll.bind(this);
  }
  render() {
    let posts = this.state.posts.map((post, index) => {
      return <div className="post" key={index}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    });
    
    return (
      <div className={"posts " + (this.state.isFetching ? "is-fetching" : "")}>
        <h1>Posts</h1>
        <div className="post-list">
          {posts}
        </div>
        <p className="loading-indicator">Loading...</p>
      </div>
    )
  }
  onScroll () {
    if (this.reachedPageBottom()) {
      this.fetchPosts();
    }
  }
  reachedPageBottom () {
    let windowHeight = window.innerHeight,
      bottomOfWindow = windowHeight + window.pageYOffset,
      documentHeight = document.body.scrollHeight;

      return (bottomOfWindow) >= documentHeight;
  }
  fetchPosts () {
    if (this.state.isFetching) {
      return;
    }

    this.setState({isFetching: true});
    postService.getAll(this.postFetchLimit, this.pageNumber).then(((posts) => {
      let currentPosts = this.state.posts;
      Array.prototype.push.apply(currentPosts, posts);

      setTimeout((self) => {
        self.setState({
          posts: currentPosts
        });

        self.pageNumber++;
        self.setState({isFetching: false});
      }, this.fetchDelay, this);
    }).bind(this));
  }
  componentDidMount () {
    this.fetchPosts();
    window.addEventListener("scroll", this.onScroll);
  }
  componentWillUnmount () {
    window.removeEventListener("scroll", this.onScroll);
  }
}

export default Main
