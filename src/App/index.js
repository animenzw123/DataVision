import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";
import "../../node_modules/font-awesome/scss/font-awesome.scss";
import Loader from "./layout/Loader";
const AdminLayout = Loadable({
  loader: () => import("./layout/AdminLayout"),
  loading: Loader,
});
class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={AdminLayout} />
      </Switch>
    );
  }
}

export default App;
