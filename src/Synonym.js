import React ,{useCallback, useState} from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Synonym = () => {
    const [word, setWord] = useState("");
    const [ans,setAns]=useState([])
    const [header,setHeader]=useState("")
    const [message,setMessage]=useState("")
var url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const HandleSynonym = () => {
        axios.get(url)
        .then((response) => {
            const res = response.data
            console.log(response)
            let meanings = []
             res.map((item)=>{
                    meanings = [...meanings,...item.meanings]
             })
             console.log(meanings)
             let synonyms  = []
             meanings.map((items)=>{
                    synonyms = [...synonyms, ...items.synonyms]
             })
             setAns(synonyms);
        }).catch((error) => {
            setMessage("No Synonyms Found")
            console.log(error);}
        );
        setHeader("Synonyms :")

    };
   
return(
    <div className="SynonymContainer">
        <TextField
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        label="Search"
        onChange={(e) => {
            setWord(e.target.value);
          }}
      />
        <Button variant="contained" style = {{
        backgroundColor : "#3A5BA0"
      }} onClick={HandleSynonym}>Search
      </Button>
      <h1>{header}</h1>
      <div className="result-text">
        <ul>
        {
            ans.length === 0? <h1>{message}</h1>:
            ans.map((item)=>{
                return <>
                <li><h2>{item}</h2></li>
                </>
            })
        }
        </ul>
      </div>
    </div>
);
}
export default Synonym;


{/* <input type="text" onChange={(e)=>{setWord(e.target.value)}}/> */}
{/* <button onClick={HandleSynonym}>Get-Synonym</button> */}