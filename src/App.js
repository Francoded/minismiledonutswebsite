import { useState } from "react";

import logo from "./images/logo.heic";

export default function Board() {
  return (
    <>
      <img src={logo} alt="Logo" />;
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
