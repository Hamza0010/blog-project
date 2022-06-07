import React from "react";
import {  useParams } from 'react-router-dom';
import useFetch from '../../useFetch'
import Addcomment from "./addcomment";

function ViewPost() {
  
  const param=useParams()
  const { data, isLoading} = useFetch("https://jsonplaceholder.typicode.com/posts/"+param.postid);
  
 return (
    <div className="post">
      {!isLoading && 
      <>
        <h1>{data?.title}</h1>
        <p>{data?.body}</p>
        <Addcomment postid={data?.id}/>
      </>
      }
    </div>
  );
}

export default ViewPost;
