import useSWR from "swr";
import ArtPieces from "@/Components/ArtPieces";
import Spotlight from "@/Components/Spotlight";

export default function HomePage() {
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

  return (
    <div>
      <h1>Art Gallery</h1>
      <Spotlight
        image={randomPiece.imageSource}
        artist={randomPiece.artist}
        dimensions={randomPiece.dimensions}
      />
      <ArtPieces pieces={pieces} />
    </div>
  );
}
