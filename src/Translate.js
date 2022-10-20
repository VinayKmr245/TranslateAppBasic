import React, { useEffect, useState } from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function Translate() {
  const [inputText, setInputText] = useState('');
  const [resultText, setResultText] = useState('');
  const [selectedLanguageKey, setLanguageKey] = useState('')
  const [languagesList, setLanguagesList] = useState([])
  const [detectLanguageKey, setdetectedLanguageKey] = useState('')
  const [header,setHeader]=useState("")
  const getLanguageSource = () => {
      axios.post(`https://libretranslate.de/detect`, {
          q: inputText
      })
      .then((response) => {
          setdetectedLanguageKey(response.data[0].language)
      }).catch((err)=>{
        console.log(err)
      })
  }
  const translateText = () => {
      setResultText(inputText)
      getLanguageSource();
      let data = {
          q : inputText,
          source: detectLanguageKey,
          target: selectedLanguageKey,
      }
      axios.post(`https://libretranslate.de/translate`, data)
      .then((response) => {
          setResultText(response.data.translatedText)
          console.log(response.data)
      }).catch((err)=>{
        console.log(err)
      })
      setHeader("Meaning :")
  }

  const languageKey = (selectedLanguage) => {
      setLanguageKey(selectedLanguage.target.value)
  }

  useEffect(() => {
     axios.get(`https://libretranslate.de/languages`)
     .then((response) => {
      setLanguagesList(response.data)
      // console.log(response.data)
     }).catch((err)=>{
      console.log(err)
    })
     getLanguageSource()
     
  }, [inputText,selectedLanguageKey])

  return (
  <div>
     <div className="TranslateContainer" maxWidth="sm">
      <TextField
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        label="Search Text"
        onChange={(e) => {
            setInputText(e.target.value);
          }}  
      />
      
      <FormControl sx={{ m: 1, minWidth: 220}}>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={selectedLanguageKey}
          onChange={languageKey}
          MenuProps={MenuProps}
        >
          {languagesList.map((language) => (
            <MenuItem
              key={language.name}
              value={language.code}
            >
              {language.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained"  onClick={translateText}
      style = {{
        backgroundColor :"#3A5BA0"
      }}
      >Search
      </Button>
      <h1>{header}</h1>
      <div className="result-text">
        <h1>{resultText}</h1> 
     </div>
  </div>
  </div>
  );
}

export default Translate;

//Without RapidApi
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
    // const[query,setQuery]=useState("");
    // const[lang,setLang]=useState("en");
    // useEffect(()=>{<h1>Hello There</h1>},[])
    // let headersList = {
    //     Accept: "*/*",
    //   "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    //   "Content-Type": "application/x-www-form-urlencoded",
    //   "Accept-Encoding": "application/gzip",
    //   "X-RapidAPI-Key": "Api-key",
    //   "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    // };

    // let bodyContent = "q="+{query}+"&target="+{lang}+"&source=en";

    // let reqOptions = {
    //   url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
    //   method: "POST",
    //   headers: headersList,
    //   data: bodyContent,
    // };

    // let response = axios.request(reqOptions);
   