import "./index.css";
import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import getCookie from "./Cookie/Get_Cookie";
import setCookie from "./Cookie/Set_Cookie";

function String_url() {
  setTimeout(
    function () {
      const final_url = getCookie("adv_id") + "/" + getCookie("id_user");
      window.location.href = final_url;
    }.bind(this),
    5000
  );
}

function Out() {
  axios
    .post(
      `http://127.0.0.1:8001/api/output/`,
      {
        id_user: getCookie("id_user"),
        adv_id: getCookie("adv_id"),
      },
      {
        "Content-type": "application/json; charset=UTF-8",
      }
    )
    .then((res) => {
      const text_out = res.data;

      setCookie("text_out", JSON.stringify(text_out));
      //console.log(text_out);
    });

  String_url();
}

export default function Center_1() {
  return (
    <div>
      <Out />
    </div>
  );
}
