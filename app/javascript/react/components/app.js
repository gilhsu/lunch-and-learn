import React from "react";
import { Route, IndexRoute, Router, browserHistory, Link } from "react-router";
import HomePage from "../containers/homePage";
import DashboardContainer from "../containers/dashboardContainer";
import EventFormTile from "../tiles/eventFormTile";

const App = props => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path="/" component={HomePage} />
        <Route path="/users/:id" component={DashboardContainer} />
        <Route path="/events/new" component={EventFormTile} />
      </Router>
    </div>
  );
};

export default App;
