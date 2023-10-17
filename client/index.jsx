import React from "react";
import ReactDom from "react-dom/client";

import TodoApp from "./TodoApp";

const root = ReactDom.createRoot(document.getElementById("root"))

root.render(
    <TodoApp/>
);