import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { FAIL, fetchData, SUC } from "../Redux/product/action";



const Products = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, data } = useSelector((store) => store.product);

  useEffect(() => {
    

    dispatch(fetchData);
  }, []);

  return isLoading ? (
    <h1>Loading....</h1>
  ) : isError ? (
    <h1>Something Went Wrong</h1>
  ) : (
    <div>
      <h1>Product</h1>
      {data.map((el) => (
        <div
          key={el.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            border: "1px solid #ccc",
            marginBottom: "10px",
            borderRadius: "5px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <div
            style={{
              display: "inline-grid",
              gap: "10px",
              textAlign: "center",
              width: "620px",
            }}
          >
            <img
              src={el.image}
              alt={el.description}
              style={{
                height: "250px",
                width: "220px",
                objectFit: "cover",
                borderRadius: "5px",
                marginLeft:'25%'
              }}
            />
            <h3
              style={{
                fontSize: "16px",
                color: "#333",
                margin: "0",
                wordWrap: "break-word",
              }}
            >
              {el.description}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
