import Navbar from "./components/Navbar";
import "./components/main.css";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ROUTES } from "./routes/routes.js";
import { useContext } from "react";
import ScrollTop from "./pages/ScrollTop";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ScrollTop>
          <Switch>
            {ROUTES.map((route) => {
              return (
                <Route
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />
              );
            })}
          </Switch>
        </ScrollTop>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
