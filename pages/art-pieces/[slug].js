import { useRouter } from "next/router";
import ArtPieceDetails from "@/Components/ArtPieceDetails";
import useSWR from "swr";
import Link from "next/link";

function ArtPieceDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const {
    data: pieces,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art");

  if (error) return <div>Error while fetching</div>;

  if (isLoading) return <div>loading...</div>;

  const onePiece = pieces.find((piece) => piece.slug === slug);

  return (
    <>
      <ArtPieceDetails
        image={onePiece.imageSource}
        title={onePiece.name}
        artist={onePiece.artist}
        year={onePiece.year}
        genre={onePiece.genre}
        dimensions={onePiece.dimensions}
      />
      <Link class="Back" href="/art-pieces">Home</Link>
    </>
  );
}

export default ArtPieceDetailPage;
