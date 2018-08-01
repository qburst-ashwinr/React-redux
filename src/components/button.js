import React from "react";

export default ({ onClick, message = "Submit" }) => (
  <button onClick={onClick}>{message}</button>
);
