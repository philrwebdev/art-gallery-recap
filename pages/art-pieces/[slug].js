import { useRouter } from "next/router";
import ArtPieceDetails from "@/Components/ArtPieceDetails";
import useSWR from "swr";
import Link from "next/link";
import { Fragment } from "react";

function ArtPieceDetailPage({onToggleFavorite, artPiecesInfo}) {
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

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    setComment({
      ...comment,
      [slug]: [...(comment[slug] || []), data.comment],
    });

    console.log(comment);
    event.target.reset();
    event.target.querySelector('input[name="comment"]').focus();

    return;
  }

  return (
    <>
      <ArtPieceDetails
        image={onePiece.imageSource}
        title={onePiece.name}
        artist={onePiece.artist}
        year={onePiece.year}
        genre={onePiece.genre}
        dimensions={onePiece.dimensions}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        slug={slug}
        colors={onePiece.colors}
      />
      <Link class="Back" href="/art-pieces">Home</Link>
    </>
  );
}

export default ArtPieceDetailPage;
