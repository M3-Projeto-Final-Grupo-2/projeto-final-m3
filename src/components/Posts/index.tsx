import React from "react";
import { useContext } from "react";
import { CitiesContext, IPost } from "../../providers/CitiesContext";
import PostsSection from "./style";

const PostsList = () => {
  const { posts, setModalPost } = useContext(CitiesContext);

  return (
    <PostsSection>
      <div className="postsBoxContainer">
        <div className="postsHeader">
          <h3>Posts</h3>
          <button onClick={() => setModalPost(true)}>Criar um post</button>
        </div>
        <ul>
          {posts.map((post: IPost) => (
            <li key={post.id}>
              <div className="postContainer">
                <div className="postTitle">
                  <div className="userTitle">
                    <div className="userLetter">U</div>
                    <div className="cityTitle">
                      <h4>{post.userName}</h4>
                      <h4>
                        {post.name}-{post.state}
                      </h4>
                    </div>
                  </div>
                </div>
                <p>{post.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </PostsSection>
  );
};

export default PostsList;
