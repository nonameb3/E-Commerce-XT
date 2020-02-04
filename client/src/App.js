import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component";
import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";

const Product = React.lazy(() => import("./pages/product/product.components"));

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading..</div>}>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/product/:productId' component={Product} />
        </Switch>
        <Footer />
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
