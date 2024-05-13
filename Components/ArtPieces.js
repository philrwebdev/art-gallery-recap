import ArtPiecesPreview from "./ArtPiecesPreview";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => {
        return (
          <li key={piece.slug}>
            <ArtPiecesPreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
              dimensions={piece.dimensions}
            />
          </li>
        );
      })}
    </ul>
  );
}
