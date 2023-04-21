import React, { useState } from "react";
import {Link} from "react-router-dom";
export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </div>
  );
}