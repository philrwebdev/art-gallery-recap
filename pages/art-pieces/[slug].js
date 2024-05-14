import { useRouter } from "next/router";
import ArtPieceDetails from "@/Components/ArtPieceDetails";
import useSWR from "swr";
import Link from "next/link";
import CommentForm from "@/Components/CommentForm";
import Comments from "@/Components/Comments";

import uselocalStorageState from "use-local-storage-state";

function ArtPieceDetailPage({ onToggleFavorite, artPiecesInfo }) {
  const [comment, setComment] = uselocalStorageState("comment", {
    defaultValue: [],
  });

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

  function handleSubmitComment(newComment) {
    setComment({
      ...comment,
      [slug]: [newComment, ...(comment[slug] || [])],
    });

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
      <Link className="Back" href="/art-pieces">
        Home
      </Link>
      <br />
      <hr />

      <CommentForm onSubmitComment={handleSubmitComment} />

      <Comments comments={comment[slug] || []} />
    </>
  );
}

export default ArtPieceDetailPage;
