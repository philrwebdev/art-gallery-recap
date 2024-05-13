import Image from "next/image";
export default function Spotlight({ image, dimensions, artist }) {
  const width = dimensions.width / 5;
  const height = dimensions.height / 5;
  return (
    <>
      <Image src={image} alt="test" height={height} width={width} />
      <p className="imageSubtext">{artist}</p>
    </>
  );
}
