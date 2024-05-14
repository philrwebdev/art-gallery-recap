import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  dimensions,
  onToggleFavorite,
  artPiecesInfo,
  slug
}) {
  const width = dimensions.width / 5;
  const height = dimensions.height / 5;

  return (
    <div className="art-piece-details">
      <Image
        class="image"
        src={image}
        alt={"title"}
        height={height}
        width={width}
      />
      <ul class="detailsUL">
        <li class="details">Title: {title}</li>
        <li class="details">Artist: {artist}</li>
        <li class="details">Year: {year}</li>
        <li class="details">Genre: {genre}</li>
      </ul>
      <FavoriteButton
        slug={slug}
        onToggleFavorite={onToggleFavorite}
        // isFavorite={isFavorite}
      />
    </div>
  );
}

export default ArtPieceDetails;
