import React from 'react';


class PostItem extends React.Component{

    render(){
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.body}</p>
                <p>{this.props.userId}</p>
            </div>
        ); 
      }
      
      
}

export default PostItem;