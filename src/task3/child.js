import React from "react";

export const Child = ({ data, count }) => {
  return (
    <>
      <div className=" d-flex justify-content-center bg-secondary">
        <h1 className=" my-5  ">{count}</h1>
      </div>
      <div className="d-flex justify-content-around bg-danger ">
        <button className="" onClick={() => data(true)}>
          {" "}
          INCREMENT
        </button>
        <button disabled={count < 1} classname="" onClick={() => data(false)}>
          {" "}
          DECREMENT
        </button>
      </div>
    </>
  );
};
