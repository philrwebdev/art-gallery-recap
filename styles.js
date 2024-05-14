import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 2rem 0rem;
  }

  .imageSubtext {
    border-bottom: 1px solid black;
    padding: 0rem 0rem 0.5rem 0rem;
  }

  h1 {
    text-align: center;
    font-size: 3rem; 
  }


.detailsUL {
  display: flex;
  flex-direction: column;
}

.details{
  margin: 5px;
  display: flex;

}

.Back {
  color: white;
  border: solid black;
  background-color: grey;
  margin: 10px;
  padding: 5px;
   
  
}
.art-piece-details{
text-align: center;
margin-top: 10px;
}

.favItem {
  display: block; 
  margin: auto;
}

`;
