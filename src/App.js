import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Main from "./pages/Main";
import Catalog from "./pages/Catalog";
import CatalogId from "./pages/CatalogId";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Page404 from "./pages/Page404";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route
            exact
            path={process.env.REACT_APP_LINK_HOME}
            component={Main}
          />
          <Route
            exact
            path={process.env.REACT_APP_LINK_CATALOG}
            component={Catalog}
          />
          <Route
            exact
            path={`${process.env.REACT_APP_LINK_CATALOG_ID}:id.html`}
            component={CatalogId}
          />
          <Route
            exact
            path={process.env.REACT_APP_LINK_ABOUT}
            component={About}
          />
          <Route
            exact
            path={process.env.REACT_APP_LINK_CONTACTS}
            component={Contacts}
          />
          <Route
            exact
            path={process.env.REACT_APP_LINK_CART}
            component={Cart}
          />
          <Route component={Page404} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
