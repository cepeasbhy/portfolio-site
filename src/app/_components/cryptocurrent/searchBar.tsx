"use client";

import { ChangeEvent, useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState<string>("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const inputData = e.target.value;
    setSearch(inputData);
  }
  return (
    <form action={"/projects/cryptoCurrent/coins/" + search}>
      <div className="form-item">
        <input type="text" onChange={(e) => handleChange(e)} required />
        <button>SEARCH</button>
      </div>
    </form>
  );
}
