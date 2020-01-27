import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
