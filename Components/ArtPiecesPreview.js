import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

export default function ArtPiecesPreview({
  image,
  dimensions,
  title,
  artist,
}) {
  const width = dimensions.width / 5;
  const height = dimensions.height / 5;
  return (
    <>
      <Image src={image} alt={title} height={height} width={width} />
      <p className="imageSubtext">
        {title} | {artist}{" "}
      </p>
    </>
  );
}
