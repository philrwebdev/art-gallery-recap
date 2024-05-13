import Image from "next/image";

export default function ArtPiecesPreview({ image, dimensions, title, artist }) {
  const width = dimensions.width / 5;
  const height = dimensions.height / 5;
  return (
    <>
      <Image src={image} alt={title} height={height} width={width} />
      <p class="imageSubtext">
        {title} | {artist}
      </p>
    </>
  );
}
