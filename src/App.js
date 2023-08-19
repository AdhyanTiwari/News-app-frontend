import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './myComponents/Navbar';
import News from './myComponents/News';
import Home from "./myComponents/Home";
import Saved from "./myComponents/Saved";
import About from "./myComponents/About";
import Signin from "./myComponents/Signin";
import SignUp from "./myComponents/SignUp"
import Newsstate from "./contexts/Newsstate";
import Alert from "./myComponents/Alert";
import Change_password from "./myComponents/Change_password";

function App() {
  return (
    <>
    <Newsstate>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home />}
        ></Route>
        <Route
          exact
          path="/business"
          element={<News category={"business"} key="business" />}
        ></Route>
        <Route
          exact
          path="/sports"
          element={<News category={"sports"} key="sports" />}
        ></Route>
        <Route
          exact
          path="/health"
          element={<News category={"health"} key="health" />}
        ></Route>
        <Route
            exact
            path="/science"
            element={<News category={"science"} key="science" />}
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={<News category={"entertainment"} key="entertainment" />}
          ></Route>
          <Route
            exact
            path="/technology"
            element={<News category={"technology"} key="technology" />}
          ></Route>
          <Route
            exact
            path="/saved"
            element={<Saved/>}
          ></Route>
          <Route
            exact
            path="/changepassword"
            element={<Change_password/>}
          ></Route>
          <Route
            exact
            path="/signin"
            element={<Signin/>}
          ></Route>
          <Route
            exact
            path="/signup"
            element={<SignUp/>}
          ></Route>
      </Routes>
      </Newsstate>
    </>
  )
}

export default App;
