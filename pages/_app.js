import Layout from "@/Components/Layout";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import { useState } from "react";

async function fetcher(...args) {
  const response = await fetch(...args);
  return await response.json();
}

export default function App({ Component, pageProps }) {

  const [artPiecesInfo, setArtPiecesInfo] = useState();

  console.log("artPiecesInfo: ", artPiecesInfo);

  function handleToggleFavorite(slug) {
    if (artPiecesInfo === undefined) {
      setArtPiecesInfo([{ slug, favorite: true }]);
    } else {
      const slugPresent = artPiecesInfo
        .map((piece) => piece.slug)
        .includes(slug);

      if (slugPresent) {
        setArtPiecesInfo(
          artPiecesInfo.map((piece) => {
            if (piece.slug === slug)
              return { ...piece, favorite: !piece.favorite };
            return piece;
          })
        );
      } else {
        setArtPiecesInfo([...artPiecesInfo, { slug, favorite: true }]);
      }
    }
  }

  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />

        <Component {...pageProps} onToggleFavorite={handleToggleFavorite} artPiecesInfo={artPiecesInfo}/>
        <Layout />

      </SWRConfig>
    </>
  );
}
