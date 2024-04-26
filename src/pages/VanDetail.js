import React from "react";
import { useParams, useSearchParams, useLocation } from "react-router-dom";
export default function VanDetail() {
  const params = useParams();

  const dd = useLocation()
  console.log(dd)

  const [searchValues, setSearchValues] = useSearchParams();

  const handleSearchParams = () => {
    setSearchValues({
      dd: "gg",
      test: "test",
    });
  };
  return (
    <>
      <h1>Van detail page goes here</h1>

      <button onClick={handleSearchParams}>click</button>
    </>
  );
}
