import axios from "axios";
import React, { useState } from "react";
// const encodedParams = new URLSearchParams();
// encodedParams.append("q", "Hello, world!");
// encodedParams.append("target", "es");
// encodedParams.append("source", "en");

// const options = {
//   method: 'POST',
//   url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
//   headers: {
//     'content-type': 'application/x-www-form-urlencoded',
//     'Accept-Encoding': 'application/gzip',
//     'X-RapidAPI-Key': '7ed6dab113mshff9f53c0b50614ap114e25jsna1d3d1ec4072',
//     'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
//   },
//   data: encodedParams
// };

// // axios.request(options).then(function (response) {
// // 	console.log(response.data.translatedText);
// // }).catch(function (error) {
// // 	console.error(error);
// });
const Translate = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [source, setSource] = useState("");
  const [target, setTarget] = useState("");
  const handleInput = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input type="text" placeholder="Enter text to translate" value={text} onChange={handleInput}  />
      <label>Source</label>
      <select name="Source-Language">
        <div className="dropdown_src">
          <button className="dropbtn">Source Language</button>
          <div class="dropdown-content">
            <label onClick={setSource("en")}>English</label>
            <label onClick={setSource("es")}>Spanish</label>
            <label onClick={setSource("fr")}>French</label>
            <label onClick={setSource("de")}>German</label>
            <label onClick={setSource("it")}>Italian</label>
            <label onClick={setSource("ja")}>Japanese</label>
            <label onClick={setSource("ko")}>Korean</label>
            <label onClick={setSource("pt")}>Portuguese</label>
            <label onClick={setSource("ru")}>Russian</label>
            <label onClick={setSource("zh")}>Chinese</label>
          </div>
        </div>
      </select>
      <select name="Target-Language">
        <div className="dropdown_tar">
          <button className="dropbtn">Target Language</button>
          <div className="dropdown_tar">
            <div class="dropdown-content">
              <label onClick={setTarget("en")}>English</label>
              <label onClick={setTarget("es")}>Spanish</label>
              <label onClick={setTarget("fr")}>French</label>
              <label onClick={setTarget("de")}>German</label>
              <label onClick={setTarget("it")}>Italian</label>
              <label onClick={setTarget("ja")}>Japanese</label>
              <label onClick={setTarget("ko")}>Korean</label>
              <label onClick={setTarget("pt")}>Portuguese</label>
              <label onClick={setTarget("ru")}>Russian</label>
              <label onClick={setTarget("zh")}>Chinese</label>
            </div>
          </div>
        </div>
      </select>
      <input type="text" value={translatedText} />
    </div>

  );
}
export default Translate;