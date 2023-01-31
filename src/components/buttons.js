import React from "react";

<div className="buttons">
  <button className="btn btn-previous">Previous</button>
  <button className="btn btn-next">Next</button>
</div>;

export default function ReturnButton({ backToPage }) {
  return (
    <button
      className="btn btn-warning btn-outline-dark"
      style={{ marginBottom: 5, fontSize: 20 }}
      onClick={backToPage}
    >
      Return to Page
    </button>
  );
}
