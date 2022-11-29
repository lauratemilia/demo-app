import React from "react"
import PostItem from "./PostItem"


class  PostList extends React.Component{            
   
  showPosts(){
    console.log("posts\n")
    return <div id="postsList"><PostList posts = {this.state.posts}/></div>
  }

    
  componentDidMount(){
 
  }

  componentWillUnmount(){
    console.log()
  }

  componentDidUpdate(){

    console.log()
  }
  

    render(){
        console.log()
        const {posts} = this.props
        return(
            <div className="posts">
                {posts.map((post, index) => 
                    {   
                        return <PostItem
                        title = {post.title}
                        body = {post.body}
                        userId = {post.userId}
                        key = {index.toString()}                
                    />               
                })}           
            </div>

       )
    }

}

export default PostList;