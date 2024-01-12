import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './myComponents/Navbar';
import News from './myComponents/News';
import Home from "./myComponents/Home";
import Saved from "./myComponents/Saved";
import Signin from "./myComponents/Signin";
import SignUp from "./myComponents/SignUp"
import Newsstate from "./contexts/Newsstate";
import Change_password from "./myComponents/Change_password";
import YoutubeFeed from "./myComponents/Youtube";
import Saved_Videos from "./myComponents/Saved_Videos";
import Discussion from "./myComponents/Discussion";

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
            path="/savedvideos"
            element={<Saved_Videos/>}
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
          <Route
            exact
            path="/aajtak"
            element={<YoutubeFeed channelId={"UCt4t-jeY85JegMlZ-E5UWtA"} channel={"Aaj Tak"}  key={"Aaj Tak"}/>}
          ></Route>
          <Route
            exact
            path="/zeenews"
            element={<YoutubeFeed channelId={"UCIvaYmXn910QMdemBG3v1pQ"} channel={"Zee News"} key={"Zee News"}/>}
          ></Route>
          <Route
            exact
            path="/bbcnews"
            element={<YoutubeFeed channelId={"UC16niRr50-MSBwiO3YDb3RA"} channel={"BBC News"} key={"BBC News"}/>}
          ></Route>
          <Route
            exact
            path="/abcnews"
            element={<YoutubeFeed channelId={"UCBi2mrWuNuyYy4gbM6fU18Q"} channel={"ABC News"} key={"ABC News"}/>}
          ></Route>
           <Route
            exact
            path="/discussion"
            element={<Discussion/>}
          ></Route>
      </Routes>
      </Newsstate>
    </>
  )
}

export default App;
