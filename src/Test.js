import React, { useEffect, useState } from "react";
import axios from "axios";
function Test() {
//   useEffect(async () => {
    //   let encodedParams = new URLSearchParams();
    //   encodedParams.append("q", "Hello, world!");
    //   encodedParams.append("target", "es");
    //   encodedParams.append("source", "en");
    // const options = {
        //   url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
    //   method: "POST",
    //   headers: {
    //     Accept: "*/*",
    //     "content-type": "application/x-www-form-urlencoded",
    //     "X-RapidAPI-Key": "760657d452msh0bf6b2affdba105p11c594jsnd33e6e2ed670",
    //     "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    //   },
    //   data: encodedParams,
    // };
    // axios
    //   .request(options)
    //   .then(function (response) {
    //     console.log(response.data.translations[0].translatedText);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
    const[query,setQuery]=useState("");
    const[lang,setLang]=useState("en");
    useEffect(()=>{<h1>Hello There</h1>},[])
    let headersList = {
        Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": "760657d452msh0bf6b2affdba105p11c594jsnd33e6e2ed670",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    };

    let bodyContent = "q="+{query}+"&target="+{lang}+"&source=en";

    let reqOptions = {
      url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    };

    let response = axios.request(reqOptions);
   

  return <div>Test</div>;
}

export default Test;
