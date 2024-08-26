import React from "react";

function Names() {
  const names = ["Alice", "Bob", "Charlie", "David"];

  const namesList = names.map((name) => <li>{name}</li>);
  return <ul>{namesList}</ul>;
}

export default Names;
