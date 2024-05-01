import { useState } from "react";

import logo from "./images/logo.png";

export default function Board() {
  return (
    <>
    <div class="row">
      <div class="col-4 col-sm-3"></div>
      <img src={logo} class="logo col-4 col-sm-6" alt="Logo" />;
      <div class="col-4 col-sm-3"></div>
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
