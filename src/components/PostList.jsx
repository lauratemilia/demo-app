import React from "react"
import PostItem from "./PostItem"


class  PostList extends React.Component{  

    // constructor(){
    //     super();
    //     this.state = {
    //         posts:[
    //             {        
    //               title: 'My life at home',
    //               content: 'I eat, I sleep, I groom, I go outside. I\'m happy',
    //               username: 'tzitzi',
    //             },
    //             {
    //               title: 'I found my family',
    //               content: 'I search for food, I hunt for birds, I climb trees. But I had an accident and broke my legs. A human girl found me and saved me. Now I have a family: I\'m safe and I\'m happy',
    //               username: 'stelica',
    //             },
    //             {
    //               title: 'Daily routine',
    //               content: 'I go to gym, I cook, I eat and then repeat',
    //               username: 'petrica',
    //             }
    //           ]
    
    //     };
    //   }

          
   
  showPosts(){
    console.log("posts\n")
    return <div id="postsList"><PostList posts = {this.state.posts}/></div>
  }

    
  componentDidMount(){
    console.log("Fetching posts")
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(response => response.json())
    // .then(data => {
    //   this.setState({posts: data});      
    // })
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
            <div>
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