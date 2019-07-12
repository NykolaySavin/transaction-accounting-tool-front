import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import FilesPage from "../filePage/FilePage.container";
import Header from "../header/Header";
import CategoryListPage from "../categoryListPage/CategoryListPage.container";
import CategoryPage from "../categoryPage/CategoryPage.container";
import TablePage from "../tablePage/TablePage.container";
import ResultPage from "../resultPage/ResultPage.container";
import store from "../../redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Header />
          <Route exact path="/" component={FilesPage} />
          <Route exact path="/categories" render={() => <CategoryListPage />} />
          <Route exact path="/category" render={() => <CategoryPage />} />
            <Route exact path="/category/:id" render={(props) => <CategoryPage />} />
          <Route exact path="/tables" component={TablePage} />
          <Route exact path="/result" component={ResultPage} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}
