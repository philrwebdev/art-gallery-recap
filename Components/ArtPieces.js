import ArtPiecesPreview from "./ArtPiecesPreview";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import styled from "styled-components";

export default function ArtPieces({ pieces, onToggleFavorite, artPiecesInfo }) {
  return (
    <ul>
      {pieces.map((piece) => {
        return (
          <>
            <StyledLink href={`/art-pieces/${piece.slug}`} key={piece.slug}>
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
            </StyledLink>
            <FavoriteButton
              slug={piece.slug}
              onToggleFavorite={onToggleFavorite}
              artPiecesInfo={artPiecesInfo}
            />
          </>
        );
      })}
    </ul>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
