import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListUser from "./components/ListUser";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddUser from "./components/AddUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <ListUser />
          </Route>
          <Route exact path="/add-user">
            <AddUser />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
