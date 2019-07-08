import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import FilesPage from "../productUpload/FilesPage.container";
import history from './routerConfig'

export default function App() {
  return (
    <div className="app">
      <BrowserRouter history={history}>
        <Route exact path="/" component={FilesPage} />
      </BrowserRouter>
    </div>
  );
}
