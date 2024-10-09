import "./index.css";
import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import getCookie from "./Cookie/Get_Cookie";
import setCookie from "./Cookie/Set_Cookie";

function String_url() {
  const final_url = getCookie("adv_id") + "/" + getCookie("id_user");
  window.location.href = final_url;
}

class Out_put extends React.Component {
  render() {
    return <div>{JSON.parse(getCookie("text_out"))["text_out"]}</div>;
  }
}

export default function Center_2() {
  return (
    <div>
      <Out_put />
    </div>
  );
}
