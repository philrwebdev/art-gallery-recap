import ArtPieces from "@/Components/ArtPieces";
import useSWR from "swr";

export default function Favorites({ onToggleFavorite, artPiecesInfo }) {
  const favsSelected = artPiecesInfo === undefined ? false : true;

  const {
    data: pieces,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art");

  if (error) return <div>Error while fetching</div>;
  if (isLoading) return <div>loading...</div>;

  if (favsSelected) {
    const favoritePieces = pieces.filter((piece) =>
      artPiecesInfo.find(
        (artPiece) => artPiece.slug === piece.slug && artPiece.favorite
      )
    );

    return (
      <>
        <h1>Favorites</h1>
        <ArtPieces
          pieces={favoritePieces}
          onToggleFavorite={onToggleFavorite}
          artPiecesInfo={artPiecesInfo}
        />
        ;
      </>
    );
  } else {
    return <h1>No favorites selected</h1>;
  }
}
