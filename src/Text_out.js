import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import getCookie from "./Get_Cookie";

function String_url() {
  const final_url =
    "http://localhost:3001/" + getCookie("adv_id") + "/" + getCookie("id_user");
  window.location.href = final_url;
}

class Out_put extends React.Component {
  Text_out = (event) => {
    event.preventDefault();
    axios.post(
      `http://127.0.0.1:8001/api/output/`,
      {
        id_user: getCookie("id_user"),
        adv_id: getCookie("adv_id"),
      },
      {
        "Content-type": "application/json; charset=UTF-8",
      }.then((res) => {
        const text_out = res.text_out;
        console.log(text_out);
      })
    );
  };
  render() {
    return (
      <div>
        <form onSubmit={this.Text_out}></form>
      </div>
    );
  }
}

export default Out_put;
