import React, { useState } from "react";
import { Link } from "react-router-dom";
import FilesPage from "../filePage/FilePage.container";
import MenuItem from "./menuItem/MenuItem";

export default function Header() {
  const [currentPath, select] = useState("/");
  const filePath = "/";
  const categoryPath = "/categories";
  const tablePath = "/tables";
  const resultPath = "/result";
  const color = "#212529";
  const size = 150;
  return (
    <div className="header">
      <MenuItem
        name="Files"
        {...{ color, size, currentPath }}
        onClick={select}
        path={filePath}
      />
      <MenuItem
        name="Categories"
        {...{ color, size, currentPath }}
        onClick={select}
        path={categoryPath}
      />
        <MenuItem
            name="Tables"
            {...{ color, size, currentPath }}
            onClick={select}
            path={tablePath}
        />
        <MenuItem
            name="Result"
            {...{ color, size, currentPath }}
            onClick={select}
            path={resultPath}
        />
    </div>
  );
}
