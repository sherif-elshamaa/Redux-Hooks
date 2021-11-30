import React from "react";
import { useSelector } from "react-redux";

import Filter from "./Filter";

function Task({ filteredBy}) {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <Filter filteredBy={filteredBy} todos={todos} />
    </div>
  );
}

export default Task;
