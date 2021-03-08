import React from "react";
import { Link } from "react-router-dom";

export default function IndexContainer() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/semantic-practice"}>Semantic Practice</Link>
        </li>
        <li>
          <Link to={"/form"}>Form</Link>
        </li>
      </ul>
    </nav>
  );
}
