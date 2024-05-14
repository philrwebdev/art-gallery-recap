import ArtPiecesPreview from "./ArtPiecesPreview";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function ArtPieces({ pieces, onToggleFavorite, artPiecesInfo }) {
  return (
    <ul>
      {pieces.map((piece) => {
        return (
          <>
            <Link href={`/art-pieces/${piece.slug}`} key={piece.slug}>
              <li key={piece.slug}>
                <ArtPiecesPreview
                  slug={piece.slug}
                  image={piece.imageSource}
                  title={piece.name}
                  artist={piece.artist}
                  dimensions={piece.dimensions}
                  onToggleFavorite={onToggleFavorite}
                  // isFavorite={isFavorite}
                />
              </li>
            </Link>
            <FavoriteButton
              slug={piece.slug}
              onToggleFavorite={onToggleFavorite}
              // isFavorite={isFavorite}
            />
          </>
        );
      })}
    </ul>
  );
}
