import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//If a user comes to this route then he must be logged In

const Users = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const atATime = 10;

  function fetchNewRecords(page) {
    setLoading(true);
    fetch(
      search
        ? `https://dummyjson.com/products/search?q=${search}&limit=${atATime}&skip=${
            (page - 1) * atATime
          }`
        : `https://dummyjson.com/products?limit=${atATime}&skip=${
            (page - 1) * atATime
          }`
    )
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        setProducts(json);
      });
  }

  useEffect(() => {
   
      setLoading(true);
      fetchNewRecords(1);
    
  }, []);

  useEffect(() => {
    //To Get Products array
    //Apply Filter on that array
    throw new Error("!Crashed")
    fetchNewRecords(1);
  }, [search]);

  function getPageArray() {
    const totalRecords = products.total;
    const totalPages = totalRecords / atATime;
    const pageArray = [];
    for (let i = 0; i < totalPages; i++) {
      const pageNumber = i + 1;
      pageArray.push(pageNumber);
    }
    return pageArray;
  }


  return (
    <div style={{ margin: 20 }}>
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        style={{ marginBottom: 20 }}
        placeholder="Search"
        type="Search text"
      ></input>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        products.products &&
        products.products.map((product) => {
          return (
            <div key={product.id}>
              <img src={product.thumbnail} width={200} height={200} />
              <h1>{product.title}</h1>
              <h3>{product.price}</h3>
            </div>
          );
        })
      )}

      {getPageArray().map((page) => {
        return (
          <button
            onClick={() => {
              fetchNewRecords(page);
            }}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Users;
