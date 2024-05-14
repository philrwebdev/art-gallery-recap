import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import styled from "styled-components";

function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  dimensions,
  onToggleFavorite,
  artPiecesInfo,
  slug,
  colors,
}) {
  const width = dimensions.width / 5;
  const height = dimensions.height / 5;

  return (
    <div className="art-piece-details" key={slug}>
      <Image
        className="image"
        src={image}
        alt={"title"}
        height={height}
        width={width}
      />
      <ul className="detailsUL">
        <li className="details">Title: {title}</li>
        <li className="details">Artist: {artist}</li>
        <li className="details">Year: {year}</li>
        <li className="details">Genre: {genre}</li>
      </ul>
      <StyledUl>
        Color Palette:
        {colors.map((color) => {
          return (
            <>
              <StyledLi style={{ backgroundColor: color }}></StyledLi>
            </>
          );
        })}
      </StyledUl>
      <FavoriteButton
        slug={slug}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
    </div>
  );
}
const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const StyledLi = styled.li`
  width: 30px;
  height: 30px;
  border: 1.5px solid #000;
  border-radius: 50%;
`;

export default ArtPieceDetails;
