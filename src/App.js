import React from "react";
import "./index.css";
import MainPage from "./Components/Main.page";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import My_posts from "./Components/Profile/My_posts";
import Dialogs from "./Components/Dialogs/Dialogs";

export default function App() {
  return (
    <div>
      <section>
        <Router>
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/dialogs" element={<Dialogs />} />
            <Route exact path="/dialogs/:id" element={<Dialogs />} />

            <Route exact path="/my_posts" element={<My_posts />} />
          </Routes>
        </Router>
      </section>
    </div>
  );
}
