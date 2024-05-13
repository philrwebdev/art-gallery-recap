import useSWR from "swr";
import ArtPieces from "@/Components/ArtPieces";

export default function HomePage() {
  const {
    data: pieces,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art");

  if (error) return <div>Error while fetching</div>;

  if (isLoading) return <div>loading...</div>;

  console.log(pieces);
  return (
    <div>
      <h1>Art Gallery</h1>
      <ArtPieces pieces={pieces} />
    </div>
  );
}
