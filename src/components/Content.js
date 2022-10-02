import React, { useEffect, useState } from "react";
import DataGrid from "./dataGrid/DataGrid";
import SearchBar from "./searchbar/SearchBar";

const ContentComp = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState("");
  useEffect(() => {
    let url = "https://api.spacexdata.com/v3/capsules";
    if (filters) {
      url = url + filters;
    }
    const getData = () => {
      fetch(url)
        .then((data) => {
          return data.json();
        })
        .then((response) => {
          setData(response);
        });
    };
    getData();
  }, [filters]);
  return (
    <>
      <SearchBar updateFilters={setFilters} />
      <DataGrid capsules={data} />
    </>
  );
};
export default ContentComp;
