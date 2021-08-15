import { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
function App() {
  const history = useHistory();
  useEffect(() => {
    history.push("/Mountaineering");
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/:category">
          <Main />
        </Route>
        <Route exact path="/course/:id">
          <div>Hi</div>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
