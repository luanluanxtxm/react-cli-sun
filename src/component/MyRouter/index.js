import React, { Suspense, useCallback } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import MyLoad from "@/component/MyLoad";
import history from "@/until/history";

export default function MyRouter({ routes }) {
  let setRoutes = useCallback((routes) => {
    return (
      <Switch>
        {routes.map((item, index) => {
          if (item.type === "route") {
            if (item.children && item.children.length) {
              return (
                <Route
                  key={item.path}
                  path={item.path}
                  render={({ history, match, location }) => {
                    return (
                      <item.component
                        history={history}
                        match={match}
                        location={location}
                      >
                        {setRoutes(item.children)}
                      </item.component>
                    );
                  }}
                />
              );
            } else {
              return (
                <Route
                  key={item.path}
                  path={item.path}
                  component={item.component}
                  exact
                />
              );
            }
          } else {
            return (
              <Redirect
                key={item.to + index}
                from={item.from}
                to={item.to}
                exact
              />
            );
          }
        })}
      </Switch>
    );
  }, []);
  return (
    <Router history={history}>
      <Suspense fallback={<MyLoad />}>{setRoutes(routes)}</Suspense>
    </Router>
  );
}
