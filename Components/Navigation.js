import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  const StyledUl = styled.ul`
    display: flex;
    justify-content: space-evenly;
  `;

  const StyledLink = styled(Link)`
    display: flex;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      background-color: lightyellow;
    }
    font-style: bold;
    color: black;
    border: 1px solid black;
    border-radius: 0.5rem;
    padding: 0.3rem;
  `;

  return (
    <>
      <StyledUl>
        <StyledLink href={"/"}>Spotlight</StyledLink>
        <StyledLink href={"/art-pieces"}>Art Pieces</StyledLink>
        <StyledLink href={"/favorites"}>Favorites</StyledLink>
      </StyledUl>
    </>
  );
}
