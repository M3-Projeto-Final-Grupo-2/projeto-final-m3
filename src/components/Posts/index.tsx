import React from "react";
import { useContext } from "react";
import { CitiesContext, IPost } from "../../providers/citiesContext";

const PostsList = () => {

    const {posts} = useContext(CitiesContext)
    console.log(posts);
    
    return(
      
            <ul>
            {posts.map((post: IPost) => (
            <li key={post.id}>
                
            </li>
      ))}
            </ul>
      

    )
    
}

export default PostsList;