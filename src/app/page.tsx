"use client";

import useClientSideFetch from "@/components/ClientSideFetch";
import { useState } from "react";

export default function Home() {
  const [word, setWord] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const data = useClientSideFetch(searchWord);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchWord(word);
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <header className="w-full text-center text-5xl font-bold p-6 mt-15">
        Welcome to Wikitimes
      </header>
      <main className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="p-3 text-center">
          Enter a word below to see how many times it shows up in Wikipedia
        </div>
        <input
          className="w-140 border-white border rounded-md focus:outline-none py-1 px-2"
          value={word}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        {data?.query?.searchinfo?.totalhits !== undefined && (
          <div className="mt-4">
            Total hits: {data.query.searchinfo.totalhits}
          </div>
        )}
      </main>
    </div>
  );
}
