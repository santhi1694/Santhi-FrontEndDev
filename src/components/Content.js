import React, { useEffect, useState } from "react";
import DataGrid from "./dataGrid/DataGrid";
import SearchBar from "./searchbar/SearchBar";

const ContentComp = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let url = `https://api.spacexdata.com/v3/capsules?limit=8&offset=${
      (currentPage - 1) * 8
    }`;
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
  }, [filters, currentPage]);
  return (
    <div className="content-layout">
      <SearchBar updateFilters={setFilters} />
      <DataGrid
        capsules={data}
        currentPage={currentPage}
        updatePage={setCurrentPage}
      />
    </div>
  );
};
export default ContentComp;
