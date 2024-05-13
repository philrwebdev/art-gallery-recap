import ArtPiecesPreview from "./ArtPiecesPreview";
import Link from "next/link";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => {
        return (
          <Link href={`/art-pieces/${piece.slug}`} key={piece.slug}>
            <li key={piece.slug}>
              <ArtPiecesPreview
                image={piece.imageSource}
                title={piece.name}
                artist={piece.artist}
                dimensions={piece.dimensions}
              />
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
