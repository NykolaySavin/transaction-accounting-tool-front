import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import FilesPage from "../filePage/FilePage.container";
import Header from "../header/Header";
import CategoryPage from "../categoryPage/CategoryPage";
import TablePage from "../tablePage/TablePage";
import ResultPage from "../resultPage/ResultPage";
import store from "../../redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Header />
          <Route exact path="/" component={FilesPage} />
          <Route exact path="/categories" component={CategoryPage} />
          <Route exact path="/tables" component={TablePage} />
          <Route exact path="/result" component={ResultPage} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}
