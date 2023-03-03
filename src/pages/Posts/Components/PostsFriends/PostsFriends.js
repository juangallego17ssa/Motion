import { PostsContainer } from "../Subcomponents/PostsContainer.style";
import Posts from "../Subcomponents/Posts";

import { useEffect, useState } from "react";
import motionAPI from "../../../../axios/motionAPI";

const PostsFriends = () => {
  const [postArray, setPostArray] = useState([]);
  const [myPostArray, setMyPostArray] = useState([]);
  const token = localStorage.getItem("token");

  //// on load, get postArray
  useEffect(() => {
    getArray();
  }, []);

  //// get postArray
  const getArray = async () => {
    const myConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "get",
    };

    // send axios request
    try {
      const response1 = await motionAPI("social/posts/me/", myConfig);
      const response2 = await motionAPI("social/posts/friends/", myConfig);
      setMyPostArray(response1.data.results);
      setPostArray(response2.data.results);
    } catch (exception) {
      console.log(exception);
    }
  };

  return (
    <PostsContainer>
        <Posts myPostArray={myPostArray} postArray={postArray} filter={"friends"}/>
    </PostsContainer>
  );
};

export default PostsFriends;
