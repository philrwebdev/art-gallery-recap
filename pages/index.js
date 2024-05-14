import useSWR from "swr";
import styled from "styled-components";
import Spotlight from "@/Components/Spotlight";

export default function SpotlightPage({onToggleFavorite, artPiecesInfo}) {
  const {
    data: pieces,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art");

  if (error) return <div>Error while fetching</div>;

  if (isLoading) return <div>loading...</div>;

  function getRandomPiece(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const randomPiece = getRandomPiece(pieces);

  const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 2rem 0rem;
  `;

  return (
    <StyledDiv>
      <h1>Spotlight</h1>
      <Spotlight
        image={randomPiece.imageSource}
        artist={randomPiece.artist}
        dimensions={randomPiece.dimensions}
        slug={randomPiece.slug}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
    </StyledDiv>
  );
}
