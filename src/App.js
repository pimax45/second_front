import React from "react";
import "./index.css";
import MainPage from "./Main.page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import getCookie from "./Cookie/Get_Cookie";
import setCookie from "./Cookie/Set_Cookie";
import MainPage_center from "./Main.page_center";

function String_url() {
  const final_url = "/" + getCookie("adv_id") + "/" + getCookie("id_user");
  return final_url;
}

export default function App() {
  const final_url = "/" + getCookie("adv_id") + "/" + getCookie("id_user");
  return (
    <div>
      <section>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path={final_url} element={<MainPage_center />} />
          </Routes>
        </Router>
      </section>
      {/* <h1 className="text-1xl font-bold underline">Hello world!</h1>; */}
    </div>
  );
}
