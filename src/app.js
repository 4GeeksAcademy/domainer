/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let word1 = ["A", "B", "C"];
  let word2 = ["D", "E", "F"];
  let word3 = ["G", "H", "I"];

  let count = 1;
  let fullstring = "";
  for (let i = 0; i < word1.length; i++) {
    for (let j = 0; j < word2.length; j++) {
      for (let k = 0; k < word3.length; k++) {
        console.log(
          count.toString() + ": " + word1[i] + word2[j] + word3[k] + ".com"
        );
        fullstring =
          fullstring +
          count.toString() +
          ": " +
          word1[i] +
          word2[j] +
          word3[k] +
          ".com" +
          "<br />";
        count++;
      }
    }
  }
  document.getElementById("fullstring").innerHTML = fullstring;
};
