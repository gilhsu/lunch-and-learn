import React from "react";
import { Route, IndexRoute, Router, browserHistory, Link } from "react-router";
import HomePage from "../containers/homePage";
import DashboardContainer from "../containers/dashboardContainer";
import InitiateEventFormContainer from "../containers/InitiateEventFormContainer";
import ConfirmEventFormContainer from "../containers/ConfirmEventFormContainer";

const App = props => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path="/" component={HomePage} />
        <Route path="/users/:id" component={DashboardContainer} />
        <Route path="/events/new" component={InitiateEventFormContainer} />
        <Route path="/events/:id/edit" component={ConfirmEventFormContainer} />
      </Router>
    </div>
  );
};

export default App;
