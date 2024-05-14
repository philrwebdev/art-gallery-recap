import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

export default function Spotlight({ image, dimensions, artist, slug, onToggleFavorite, artPiecesInfo }) {
  const width = dimensions.width / 5;
  const height = dimensions.height / 5;
  return (
    <>
      <Image src={image} alt="test" height={height} width={width} />
      <p className="imageSubtext">{artist}</p>
      <FavoriteButton
        slug={slug}
        onToggleFavorite={onToggleFavorite}
        // isFavorite={isFavorite}
      />
    </>
  );
}
