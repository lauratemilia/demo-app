import React from 'react';


class PostItem extends React.Component{

    render(){
        return (
            <div id="post">
                <div>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.body}</p>
                    <p>by: {this.props.userId}</p>
                </div>
            </div>
        ); 
      }
      
      
}

export default PostItem;