import ArtPieces from "@/Components/ArtPieces";
import useSWR from "swr";

export default function ArtPiecesPage({onToggleFavorite, artPiecesInfo}) {
  const {
    data: pieces,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art");

  if (error) return <div>Error while fetching</div>;

  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <h1>Pieces</h1>
      <ArtPieces pieces={pieces} onToggleFavorite={onToggleFavorite} artPiecesInfo={artPiecesInfo}/>;
    </>
  );
}
