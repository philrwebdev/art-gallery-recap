import { useState } from "react";

function CommentForm({ onSubmitComment }) {
  const [comment, setComment] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitComment(comment);
    setComment("");
  }

  function handleInputChange(event) {
    setComment(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Schreibe einen Kommentar:</label>
      <br />
      <input 
        id="comment" 
        name="comment" 
        value={comment} 
        onChange={handleInputChange} 
      />
      <button type="submit">Senden</button>
    </form>
  );
}

export default CommentForm;