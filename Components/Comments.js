import React from "react";
import styled from "styled-components";

function Comments({ comments }) {
  return (
    <StyledDiv>
      {comments.map((comment, index) => (
        <p key={index}>{comment}</p>
      ))}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  text-align: center;
`;

export default Comments;
