import { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import CourseDetails from "./components/CourseDetails";
function App() {
  //Direct routing to a category when page loads or component mounts
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
          <CourseDetails/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
