import { useState } from "react";

import logo from "./images/logo.png";

export default function Board() {
  return (
    <>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-2"></div>
        <img src={logo} class="col-md-4 col-8" alt="Logo" />
        <div class="col-md-4 col-2"></div>
      </div>
    </div>
    </>
  );
}

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue("X");
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
