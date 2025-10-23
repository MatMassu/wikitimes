import { useEffect, useState } from "react";

interface WikiSearchResult {
  query?: {
    searchinfo?: { totalhits: number };
  };
}

export default function useClientSideFetch(word: string) {
  const [data, setData] = useState<WikiSearchResult | null>(null);
  useEffect(() => {
    if (!word) return;
    fetch(
      `https://www.mediawiki.org/w/api.php?action=query&format=json&prop=&list=search&formatversion=2&srsearch=${word}&origin=*`
    )
      .then((response) => response.json())
      .then((json: WikiSearchResult) => {
        setData(json);
      });
  }, [word]);
  return data;
}
