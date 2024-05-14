import ArtPieces from "@/Components/ArtPieces";
import styled from "styled-components";
import useSWR from "swr";

export default function ArtPiecesPage({ onToggleFavorite, artPiecesInfo }) {
  const {
    data: pieces,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art");

  if (error) return <div>Error while fetching</div>;

  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <StyledH1>Art Gallery</StyledH1>
      <ArtPieces
        pieces={pieces}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
      ;
    </>
  );
}

const StyledH1 = styled.h1`
  padding-left: 3%;
`;
