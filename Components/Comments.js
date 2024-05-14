import React from "react";

function Comments({ comments }) {
  return (
    <div>
      {comments.map((comment, index) => (
        <p key={index}>{comment}</p>
      ))}
    </div>
  );
}

export default Comments;
